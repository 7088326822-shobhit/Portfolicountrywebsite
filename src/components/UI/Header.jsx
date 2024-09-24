import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {

  const [showMenu, setShowMenu] = useState();

  const handleHamburgerBtn = () => {
    setShowMenu(!showMenu);
  }
  return (
    <header>
       <div className='container'>
         <div className='grid navbar-grid'>
            <div className='logo'>
              <NavLink to="/">
                <h1>WORLD MAP</h1>
                {/* <img src='/img/aaaaaaa-removebg-preview.png'/> */}
              </NavLink>
            </div>
            <nav  className={showMenu ? "menu-mobile" : "menu-web"}>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/country">Country</NavLink>
                </li>
              </ul>
            </nav>

            <div className="ham-menu">
              <button onClick={handleHamburgerBtn}>
                 <GiHamburgerMenu/>
              </button>
            </div>
         </div>
       </div>
    </header>
  )
}

export default Header