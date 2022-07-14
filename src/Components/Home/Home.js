import React from 'react'
import './Home.css'
import { FaUserCircle } from 'react-icons/fa'
import Display from '../Display/Display'

function Home() {
  return (
    <div className='home'>
      <div className="user">
        <div className="userDetails">
          <p>Hi, Rohan</p>
          <FaUserCircle size={30} />
        </div>
      </div>
      <h1 style={{paddingLeft: "60px"}}>DASHBOARD</h1>
      <hr style={{width: "95%"}}/>
      <Display />
    </div>
  )
}

export default Home