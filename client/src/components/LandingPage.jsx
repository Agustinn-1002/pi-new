import React from 'react'
import { Link } from 'react-router-dom'
import e from '../styles/LandingPage.module.css'
import video from '../material/landing.mp4'

const LandingPage = () => {
  return (
    <div className={e.contain}>
      <video src={video} autoPlay loop muted/>
      <Link className={e.link} to={'/Home'}>
        <h1>H</h1> 
        <div className={e.image}>
          <img src='https://i.pinimg.com/originals/05/8c/c1/058cc1913cf7d2bd93d6153ad22205f5.png'/>
        </div>
        <h1>ME</h1>
      </Link>
    </div>
  )
}

export default LandingPage