import React from 'react'
import "../styles/Header.css"
import {BsTwitter} from "react-icons/bs"

function Header() {
  return (
    <div>
        
       <header>
           {/* <i className='logo'><BsTwitter/><span>Booker.com</span></i> */}
           <span><BsTwitter/><a>Booker.com</a></span>
           <nav>
               <ul className='nav-links'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Faq's</a></li>
               </ul>
           </nav>
           <button className='btn-1'>Get started</button>
       </header>
        
    </div>
  )
}

export default Header