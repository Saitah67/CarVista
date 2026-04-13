import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Navbar from './Navbar';



function Addcars() {
    // declaring state variables
  const[car_name,setcarName] = useState("")
  const[car_description,setcarDescription] = useState("")
  const[car_cost,setcarCost] = useState("")
  const[car_photo,setcarPhoto] = useState("")

  // status messages
  const[loading,setLoading] = useState("")
  const[error,setError] = useState("")
  const[success,SetSuccess] = useState("")

  // function to add car to database
  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading("Please Wait")
    try{
      // retrieve cars details
      const formData = new FormData();
      formData.append("car_name",car_name)
      formData.append("car_description",car_description)
      formData.append("car_cost",car_cost)
      formData.append("car_photo",car_photo)

      // adding the base url to post data
      const response = await axios.post("https://vincentfungo.alwaysdata.net/api/add_car",formData)
      SetSuccess(response.data.success)
      setLoading("")

    }catch (error){
      setError(error.message)

    }
  }
  
  return (
    
    <div className='row justify-content-center'>
      <Navbar/>
        <div className='col-md-6 card shadow m-2 p-4 bg-success'>
      <h1>Upload cars</h1>

      {/* binding variables */}
      {error}
      {loading}
      {success}


        <nav>
          <Link to="/" className='btn btn-dark'>Get all cars</Link>
        </nav>


      <form action="" onSubmit={handleSubmit} className='mt-10'>
        <input 
        type="text" 
        placeholder='Enter car Name' 
        className='form-control' 
        onChange={(e)=>setcarName(e.target.value)} 
        required/><br /><br />

        <textarea 
        name="car description" 
        className='form-control' 
        onChange={(e)=>setcarDescription(e.target.value)} 
        required>
        </textarea><br /><br />

        <input 
        type="number" 
        placeholder='car cost' 
        className='form-control' 
        onChange={(e)=>setcarCost(e.target.value)} 
        required/>
        <br /><br />

        <input 
        type="file" 
        placeholder='' 
        className='form-control' 
        onChange={(e)=>setcarPhoto(e.target.files[0])} 
        required/>
        <br /><br />

        <input type="submit" value="Submit" className='btn btn-primary w-75' />
      </form>
    </div> 
      

    </div>
    
  )
  
}

export default Addcars