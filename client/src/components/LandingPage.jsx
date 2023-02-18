import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <div>LandingPage</div>
      <Link to={'/home'}>Home</Link>
    </>
  )
}

export default LandingPage