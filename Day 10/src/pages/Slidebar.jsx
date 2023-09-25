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
    <div className='sli'>
    <div className='sli2'> <DashboardIcon style={{width:'4vw',height:"4vh",color:'white'}}/><h onClick={()=>{navigate('/Dashboard2')}} style={{borderRadius:"0px", width:"12vw",height:"6vh",color:'white',cursor:'pointer'}}> Home</h> </div><br></br>
    <div className='sli3'> <DynamicFeedIcon style={{width:'4vw',height:"4vh",color:'white'}}/><h onClick={()=>{navigate('/Dashboard3')}} style={{borderRadius:"0px",width:"12vw",height:"6vh",color:'white',cursor:'pointer'}}>Project</h></div><br></br>
    <div className='sli4'> <TaskIcon style={{width:'4vw',height:"4vh",color:'white'}}/> <h onClick={()=>{navigate('/Dashboard4')}} style={{borderRadius:"0px",width:"12vw",height:"6vh",color:'white',cursor:'pointer'}}>Task </h></div>
    <div className='sli6'> <CalendarMonthIcon style={{width:'4vw',height:"4vh",color:'white'}}/> <h onClick={()=>{navigate('/Dashboard5')}} style={{borderRadius:"0px",width:"12vw",height:"6vh",color:'white',cursor:'pointer'}}>Calender</h></div>
    <div className='sli7'> <Diversity3Icon style={{width:'4vw',height:"4vh",color:'white'}}/><h onClick={()=>{navigate('/Dashboard6')}} style={{borderRadius:"0px",width:"12vw",height:"6vh",color:'white',cursor:'pointer'}}>Team</h> </div>
    <div className='sli8'><WorkHistoryIcon style={{width:'4vw',height:"4vh",color:'white'}}/> <h onClick={()=>{navigate('/Dashboard7')}} style={{borderRadius:"0px",width:"12vw",height:"6vh",color:'white',cursor:'pointer'}}>Time Sheet</h></div>
    <div className='sli5'><img src='https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/5b/27/4d/5b274d0e-8050-c052-6b09-a2410b7009f6/source/512x512bb.jpg' style={{height: "15vh", width: "13vw"}}/></div>
    <div className='sli9' onClick={()=>{navigate('/')}} style={{cursor:"pointer",color:"white"}}>Logout <LogoutIcon className='sli0' style={{ color:"white"}}/> </div>
    </div>
    </>
  )
}

export default Slidebar