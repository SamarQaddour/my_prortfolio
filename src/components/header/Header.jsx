import React from "react";
import './header.css';
import CTA from "./CTA";
import me from  '../../assets/me.png'
import HeaderSocials from "./HeaderSoicals";
const Header = () => {
    return(
    <header>
        <div className='container haeder_container'>
            <h5>Hello T'm</h5>
            <h1>Samar Qaddour</h1>
            <h5 className='text-light'>Web Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className='me'>
                <img src={me} alt=""/>
            </div>
            <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
    </header>
    )
}
export default Header;