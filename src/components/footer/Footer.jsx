import React from "react";
import './footer.css'
import {FaFacebookF} from "react-icons/fa";
import {IoLogoTwitter} from 'react-icons/io';
import {FiInstagram} from 'react-icons/fi';
const Footer = () => {
    return(
      <footer>
          <a href='/#' className='footer
          --logo'>Samar</a>
          <ul className='permalinks'>
             <li><a href='/#'>Home</a></li>
             <li><a href='#about'>About</a></li>
             <li><a href='#experience'>experience</a></li>
             <li><a href='#services'>services</a></li>
             <li><a href='#portfolio'>portfolio</a></li>
             <li><a href='#testimonials'>testimonials</a></li>
             <li><a href='#contact'>contact</a></li>
          </ul>
          <div className='footer__socials'>
              <a href='https://facebook.com'><FaFacebookF/></a>
              <a href='https://instagram.com'><FiInstagram/></a>
              <a href='https://twitter.com'><IoLogoTwitter/></a>
          </div>
      </footer>
    )
}
export default Footer;