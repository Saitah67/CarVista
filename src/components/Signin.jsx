import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
    // declaring variables
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  // status messsages
  const[loading,setLoading] = useState("")
  const[success,SetSuccess] = useState("")
  const[error,setError] = useState("")

  // navigation
  const navigate = useNavigate();

  // function to sign in
  const handleSignin = async(e) =>{
    e.preventDefault()
    setLoading("Please wait")
    try{
      // fetching user details
      const formData = new FormData();
      formData.append("email",email)
      formData.append("password",password)

      // adding base url
      const response = await axios.post("https://vincentfungo.alwaysdata.net/api/signin", formData);

      if (response.data.user){
        SetSuccess(response.data.message)
        // saving user in local storage
        localStorage.setItem("user",JSON.stringify(response.data.user))

        navigate("/")
        setLoading("")

        
      }else{
        setError(error.message)
      }

    }catch (error){
      setError(error.message)
      

    }
  }
  return (
    <div className='row justify-content-center '>
        <div className='col-md-6 card shadow m-2 p-4 bg-success'>
            <h1>Signin</h1>

            <form>
                <input type="email" placeholder='Enter email' className='form-control' onChange={(e=>setEmail(e.target.value))}/><br /><br />
                <input type="password" placeholder='Password' className='form-control' onChange={(e=>setPassword(e.target.value))}/><br /><br />
                <input type="submit" value={loading ? "Login...":"Signin"} disabled={loading} className='btn btn-primary w-75' /><br /><br />
                Dont have an account?<Link to="/Signup" className='text-light'>Signup</Link>
            </form>
        </div>
    </div>
  )
}

export default Signin