import Navbar from "./components/Navbar";
//To-do later
import { Route, Routes, useNavigate } from "react-router-dom";
import Gallery from "./components/Gallery";
import LogIn from "./components/LogIn";
import { UserAuth } from "./utils/AuthContext";
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate()
  const { currentUser, loading } = UserAuth()
  
  useEffect(() => {
 if (currentUser) {
   navigate("/")
  } else {
    navigate("/login")
  }
  }, [currentUser, navigate])

 
  return (
    <main className="bg-heroBg bg-cover bg-fixed bg-no-repeat text-white w-full h-full font-poppins">
      <div className="bg-black/80  px-5 sm:px-10 lg:px-20 sm:py-8 py-5 w-full">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Gallery/>}/>
          <Route path="/login" element={<LogIn/>}/>
        </Routes>
  {/* to do later */}
      </div>
    </main>
    
  )
}
