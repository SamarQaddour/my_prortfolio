import React from "react";
import './Services.css'
import {BiCheck} from "react-icons/bi";
const Services = () => {
    return(
        <section id='service'>
          <h5>What I offer</h5>
            <h2>Services</h2>
            <div className='container services__container'>
                <article className='service'>
                 <div className='service__head'>
                     <h3>React Project</h3>
                 </div>
                    <ul>
                     <div className='service__list'>
                         <li>
                             <BiCheck className='service__list__icon' size={50}/>
                             <p>cutsom css for build responsive website</p>
                         </li>
                     </div>
                        <div className='service__list'>
                         <li>
                             <BiCheck className='service__list__icon' size={50}/>
                             <p>React Router DOM for move different pages</p>
                         </li>
                     </div>
                        <div className='service__list'>
                         <li>
                             <BiCheck className='service__list__icon' size={50}/>
                             <p>use firebase as a backand for build chat application i sign up and do chat between two user.</p>
                         </li>
                     </div>
                        <div className='service__list'>
                         <li>
                             <BiCheck className='service__list__icon' size={50}/>
                             <p> More than one framework of css as tailwindcss and materiel UI </p>
                         </li>
                     </div>
                    </ul>
                </article>
                <article className='service'>
                 <div className='service__head'>
                     <h3>Next Project</h3>
                 </div>
                    <ul>
                        <div className='service__list'>
                            <li>
                                <BiCheck className='service__list__icon' size={50}/>
                                <p>Making the site at the forefront of search engines for the services provided by the NEXT framework(search engine optimization).</p>
                            </li>
                        </div>
                        <div className='service__list'>
                            <li>
                                <BiCheck className='service__list__icon' size={50}/>
                                <p>Route(file base) is handled by file system.</p>
                            </li>
                        </div>
                        <div className='service__list'>
                            <li>
                                <BiCheck className='service__list__icon' size={50}/>
                                <p> use redux that components only re-render when their data has actually changed.</p>
                            </li>
                        </div>
                        <div className='service__list'>
                            <li>
                                <BiCheck className='service__list__icon' size={50}/>
                                <p> experience in( Git and Githup), upload and Merge</p>
                            </li>
                        </div>
                    </ul>
                </article>
                <article className='service'>
                 <div className='service__head'>
                     <h3>React Project</h3>
                 </div>
                    <ul>
                        <div className='service__list'>
                            <li>
                                <BiCheck className='service__list__icon' size={50}/>
                                <p>bulid eCommerce contain many categories and products.</p>
                            </li>
                        </div>
                        <div className='service__list'>
                            <li>
                                <BiCheck className='service__list__icon' size={50}/>
                                <p>Add my favorite products inside cart using Redux.</p>
                            </li>
                        </div>
                        <div className='service__list'>
                            <li>
                                <BiCheck className='service__list__icon' size={50}/>
                                <p>Design of login and signup using validation in regular expression javaScript.</p>
                            </li>
                        </div>
                        <div className='service__list'>
                            <li>
                                <BiCheck className='service__list__icon' size={50}/>
                                <p>Learn mare cutsom css for responsive and design  a suitable form for the site.</p>
                            </li>
                        </div>
                    </ul>
                </article>
            </div>
        </section>
    )
}
export default Services;