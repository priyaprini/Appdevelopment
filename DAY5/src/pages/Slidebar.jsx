import React from 'react'
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Link} from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';
import TaskIcon from '@mui/icons-material/Task';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

const Slidebar = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className='sli'><div className='s1'></div>
    <div className='sli2'><button type='button' onClick={()=>{navigate('/Dashboard2')}} style={{borderRadius:"0px",width:"12vw",height:"6vh",color:'white',backgroundColor:'black',cursor:'pointer'}}>Home <DashboardIcon style={{width:'4vw',height:"4vh"}}/></button></div><br></br>
    <div className='sli3'><button type='button' onClick={()=>{navigate('/Dashboard3')}} style={{borderRadius:"0px",width:"12vw",height:"6vh",color:'white',backgroundColor:'black',cursor:'pointer'}}>Project<DynamicFeedIcon/></button></div><br></br>
    <div className='sli4'><button type='button' onClick={()=>{navigate('/Dashboard4')}} style={{borderRadius:"0px",width:"12vw",height:"6vh",color:'white',backgroundColor:'black',cursor:'pointer'}}>Task <TaskIcon/></button></div>
    <div className='sli6'><button type='button' onClick={()=>{navigate('/Dashboard5')}} style={{borderRadius:"0px",width:"12vw",height:"6vh",color:'white',backgroundColor:'black',cursor:'pointer'}}>Calender<CalendarMonthIcon/></button></div>
    <div className='sli7'><button type='button' onClick={()=>{navigate('/Dashboard6')}} style={{borderRadius:"0px",width:"12vw",height:"6vh",color:'white',backgroundColor:'black',cursor:'pointer'}}>Team <Diversity3Icon/></button></div>
    <div className='sli8'><button type='button' onClick={()=>{navigate('/Dashboard7')}} style={{borderRadius:"0px",width:"12vw",height:"6vh",color:'white',backgroundColor:'black',cursor:'pointer'}}>Time Sheet<WorkHistoryIcon/></button></div>
    <div className='sli5'><img src='https://st4.depositphotos.com/5040187/19758/v/450/depositphotos_197589940-stock-illustration-logo-swoosh-global-red-letter.jpg' style={{height: "10vh", width: "10vw"}}/></div>
    <div className='sli9' onClick={()=>{navigate('/')}} style={{cursor:"pointer",color:"white"}}>Logout <LogoutIcon className='sli0' style={{ color:"white"}}/> </div>
    </div>
    </>
  )
}

export default Slidebar