import React from 'react'
import './Contactus.css'
import { useNavigate } from 'react-router-dom';
const Contactus = () => {
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
    <div className="Contactus-container">
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
    <div className="Contactus-containerbox">
           <form >
              <h2>Contact Us</h2>
              <div className="Contactus-list">
              <label for="fname">First Name : </label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
              <label for="email">Email :</label>
              <input type="text" id="email" name="email" placeholder="Your Email.."/>
              <label for="country">Country :</label>
              <select id="country" name="country">
                 <option value="australia">India</option>
                 <option value="canada">Canada</option>
                 <option value="usa">USA</option>
              </select>
              <label for="subject">Message :</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
              <input  className='Contactus-list-submitbutton' type="submit" value="Submit"/>
              </div>
       </form>

    </div>
 </div>
  )
}

export default Contactus