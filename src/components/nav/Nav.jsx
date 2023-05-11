import React from "react";
import './nav.css'
import {AiOutlineHome,AiFillMessage} from 'react-icons/ai';
import {FaUserAlt}from'react-icons/fa';
import {BsBookmarkStarFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from "react";
const Nav = () => {
    const [activeNav,setactiveNav]=useState('#')
    return(
      <nav>
          <a href="/#" onClick={() => setactiveNav('#')} className={activeNav==='#'? 'active' : ''}><AiOutlineHome/></a>
          <a href="#about" onClick={() => setactiveNav("#about")} className={activeNav === "#about" ? 'active' : ''}><FaUserAlt/></a>
          <a href="#experience" onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BsBookmarkStarFill/></a>
          <a href="#service" onClick={() => setactiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine/></a>
          <a href="#contact" onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage/></a>
      </nav>
    )
}
export default Nav;