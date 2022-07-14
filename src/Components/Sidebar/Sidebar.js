import React from 'react'
import './Sidebar.css'
import logo from '../Sidebar/logo.png'
import { AiFillDashboard } from 'react-icons/ai'
import { BsPlusCircleFill } from 'react-icons/bs'
import { BiDevices, BiLogOut } from 'react-icons/bi'
import { auth, provider, db } from '../../firebaseConf'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate, NavLink } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react'

function Sidebar() {
  const [user] = useAuthState(auth);
  
  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut().catch(alert)
    navigate('/login')
  }

  

  
  
  return (
    <div className='sidebar'>
      <div className="sidebarTitle">
        <h1>VNRVJIET</h1>
        <img className='logoImg' src={logo} alt="image" />
      </div>
      <div className="options">
        {user && <><div className="option">
          <AiFillDashboard size={30} />
          <p>Dashboard</p>
        </div>
        <div className="option">
          <BsPlusCircleFill size={30} />
          <p>Add a device</p>
        </div>
        <div className="option">
          <BiDevices size={30} />
          <p>My Devices</p>
          </div></>}
        
        <div className="option">
          <BiLogOut size={30} />
          {
            user ? <NavLink to='/login' onClick={signOut}>Logout</NavLink> : <NavLink to='/login'>Login</NavLink>
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar