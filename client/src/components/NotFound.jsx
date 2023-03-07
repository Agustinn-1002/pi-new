import React from 'react'
const contain = {
  color:'#555',
  fontSize:'10rem',
  height: '100vh',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection:'column',
}

const title = {
  margin: '0',
}
const data = {
  margin: '0',
  color: '#aaa'
}
const NotFound = () => {
  return (
    <div style={contain}>
      <h1 style={title}>
        404
      </h1>
      <p style={data}>
        Not Found
      </p>
    </div>
  )
}

export default NotFound