import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { UserAuth } from "../utils/AuthContext"


export default function LogIn() {
    const initialFormData = {
        email: "",
        password: ""
    }
    const {currentUser, logIn} = UserAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(false)

    function handleChange(e) {
    const { name, value } = e.target
    setFormData(prevData => ({...prevData, [name]: value}))
    }
    
    async function handleLogin(e) {
    e.preventDefault()
   try {
       await logIn(formData.email, formData.password)
    } catch (err) {
      console.error(err.message)
        }

    if (currentUser) {
        navigate('/')
       toast.success("You're logged!")
        setFormData(initialFormData)
    } else {
        setError(true)
       }
    
 }


  return (
      <section className="md:h-[73.2vh] h-screen w-full flex flex-col justify-center items-center gap-y-14 my-20 sm:my-0">
          <div>
              <h2 className="text-2xl font-bold text-[#915eff] ">Hello! Login here</h2>
            {error && <p className="text-white center font-semibold text-sm text-center ">Oga! You no sabi your password again?!</p>}
          </div>
          
          <form
              onSubmit={handleLogin}
              className="flex flex-col gap-y-10">
              <label htmlFor="email" className=" w-[300px] md:w-[500px] h-[40px]">
                  <input
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email here"
                      className=" border-2 pl-2 rounded-md bg-transparent text-white w-full h-full placeholder:text-white outline-none py-2 px-1"
                      type="email"
                      name="email"
                      id="email" />
              </label>
              <label htmlFor="password" className="w-[300px] md:w-[500px] h-[40px]">
                  <input
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="enter your password..."
                      className=" border-2 pl-2 rounded-md bg-transparent text-white w-full h-full placeholder:text-white outline-none py-2 px-1"
                      type="password"
                      name="password"
                      id="password" />
              </label>

              <button
                  type="submit"
                  className="py-3 px-8 mx-auto rounded-xl outline-none w-fit text-[#915eff] font-bold shadow-md hover:bg-white/80" >LOGIN</button>
          </form>
           <ToastContainer />
    </section>
  )
}
