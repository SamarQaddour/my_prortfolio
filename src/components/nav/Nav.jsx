import React from "react";
import './nav.css'
import {AiOutlineHome,AiFillMessage} from 'react-icons/ai';
import {FaUserAlt}from'react-icons/fa';
import {BsBookmarkStarFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from "react";
const Nav = () => {
    const [navActive,setNavActive]=useState('#')
    return(
      <nav>
          <a href="/#" onClick={() => setNavActive('#')} className={navActive==='#'? 'active' : ''}><AiOutlineHome/></a>
          <a href="#about" onClick={() => setNavActive("#about")} className={navActive === "#about" ? 'active' : ''}><FaUserAlt/></a>
          <a href="#experience" onClick={() => setNavActive('#experience')} className={navActive === '#experience' ? 'active' : ''} ><BsBookmarkStarFill/></a>
          <a href="#service" onClick={() => setNavActive('#service')} className={navActive === '#service' ? 'active' : ''}><RiServiceLine/></a>
          <a href="#contact" onClick={() => setNavActive('#contact')} className={navActive === '#contact' ? 'active' : ''}><AiFillMessage/></a>
      </nav>
    )
}
export default Nav;