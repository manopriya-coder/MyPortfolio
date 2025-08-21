import React from 'react'
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div className='main'>
      <div className='logomain'>
        <div className='logoCircle'>
        </div>
        <div className='logoName'>
          <h3>Minifolio</h3>
        </div>
      </div>
      <div className='navMenu'>
        <p>Home</p>
        <p>About me</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Navbar