import React from 'react'
import Logo from '../../Images/580b57fcd9996e24bc43c529.png';
import Icon from '../../Images/netflx-navbaricon.png';

function Navbar() {
  return (
    <div className="navbar">
      <img className='logo' alt="image" src={Logo}/>
      <img className='Imgnavbar' alt="image" src={Icon}/>
    </div>
  )
}

export default Navbar