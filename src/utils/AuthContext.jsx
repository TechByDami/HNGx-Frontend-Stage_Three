import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const logIn = async (email, password) => {
        try {
            const userCred = await signInWithEmailAndPassword(auth, email, password)
          setCurrentUser(userCred.user)
          console.log("user")
        } catch (error) {
            console.error(error.message)
        }
    }

    const logout = async () => {
    try {
      await signOut(auth)
    setCurrentUser(null)
    } catch (error) {
      console.error(error.message)
    }
  }
    
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
      setCurrentUser(user)
      setLoading(true)
      } else {
        setCurrentUser(null);
        setLoading(false)
      }
      
    })

   return () => {unsubscribe()}
    }, [])   
  
    const value = { logIn, currentUser, loading, logout }
    return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(UserContext)
}