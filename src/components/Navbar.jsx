import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const handleOnClickBtn = () => {
        setMenu(!menu);
    }
  return (
    <header>
       <div className='container'>
         <div className='grid navbar-grid'>
            <div className='logo'>
                {/* <img src='../../public/img/aaaaaaa-removebg-preview.png' alt='logo'/> */}
                <h1>COUNTRIES</h1>
            </div>
            <nav className={menu ? "menu-mobile" : "menu-web"}>
                <ul>
                   <li><a href='#'>Home</a></li>
                   <li><a href='#'>About</a></li>
                   <li><a href='#'>Contact</a></li>
                   <li><a href='#'>Country</a></li>
                </ul>
            </nav>
            <div className='ham-menu'>
                <button onClick={handleOnClickBtn}>
                    <GiHamburgerMenu/>
                </button>
            </div>
         </div>
       </div>
    </header>
  )
}

export default Navbar