import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
    const gotohome=()=>{
        navigate('/dashboard')
    }
    const gotoabout=()=>{
        navigate('/about')
    }
    const gotocontactus=()=>{
        navigate('/contactus')
    }
    const gotologin=()=>{
        navigate('/login')
    }
    const gotosignup=()=>{
        navigate('/signup')
    }
  return (
    <div>
      <div className="Home-navbar">
        <div className="Home-navbar-left">
          <img src="https://res.cloudinary.com/dnksokt7c/image/upload/v1695388888/WhatsApp_Image_2023-09-22_at_18.48.21_kanc5v.jpg" alt="" />
          
        
        </div>
        <div className="Home-navbar-right">
        <p onClick={gotohome}>Home</p>
        <p onClick={gotoabout}>About</p>
        <p onClick={gotocontactus}>Contact</p>
        <p onClick={gotologin}>Login</p>
        <p onClick={gotosignup}>SignIn</p>
        </div>
        </div>
      
      <div className="home-Container">
        <div className="home-containerleft">
          <h1>TaskManagement</h1>
          <p> A task is an activity or piece of work which you have to do, usually as part of a larger project. Walker had the unenviable task of breaking the bad news to Hill. She used the day to catch up with administrative tasks. Synonyms: job, duty, assignment, work More Synonyms of task.</p>
          <h2>WELCOME!</h2>
        </div>
        <div className="home-containerright">
          <img src="https://i.pinimg.com/564x/c1/57/67/c15767a76ac82649105886c23e7bf5a4.jpg "alt="" />
          
        </div>
      </div>
      
      

      
    </div>
  )
}

export default Home