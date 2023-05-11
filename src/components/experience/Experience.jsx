import React from "react";
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
    return(
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='exprience__details'>
                           <BsPatchCheckFill className='exprience__details__icon' />
                         <div>
                             <h4>HTML</h4>
                             <small className='text-light'>Experienced</small>
                         </div>
                        </article>
                        <article className='exprience__details'>
                           <BsPatchCheckFill  className='exprience__details__icon' />
                          <div>
                              <h4>CSS</h4>
                              <small className='text-light'>Experienced</small>
                          </div>
                        </article>
                        <article className='exprience__details'>
                           <BsPatchCheckFill  className='exprience__details__icon' />
                           <div>
                               <h4>JavaScript</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                        <article className='exprience__details'>
                           <BsPatchCheckFill  className='exprience__details__icon' />
                          <div>
                              <h4>React</h4>
                              <small className='text-light'>Experienced</small>
                          </div>
                        </article> <article className='exprience__details'>
                           <BsPatchCheckFill  className='exprience__details__icon' />
                           <div>
                               <h4>Next</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                        <article className='exprience__details'>
                           <BsPatchCheckFill  className='exprience__details__icon' />
                            <div>
                                <h4>Material UI</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>  <article className='exprience__details'>
                          <BsPatchCheckFill  className='exprience__details__icon' />
                           <div>
                               <h4>Tailwind</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                    </div>
                </div>
                <div className='experience__tester'>
                    <h3>Software tester</h3>
                    <div className='experience__content'>
                        <article className='exprience__details'>
                           <BsPatchCheckFill  className='exprience__details__icon' />
                            <div>
                                <h4>automation test opium </h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                           <BsPatchCheckFill  className='exprience__details__icon' />
                           <div>
                               <h4>Postman</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                        <article className='exprience__details'>
                           <BsPatchCheckFill  className='exprience__details__icon' />
                              <div>
                                  <h4>stress testing jmeter</h4>
                                  <small className='text-light'>Experienced</small>
                              </div>
                        </article>
                        <article className='exprience__details'>
                           <BsPatchCheckFill  className='exprience__details__icon' />
                              <div>
                                  <h4> JIRA</h4>
                                  <small className='text-light'>Experienced</small>
                              </div>
                        </article>
                        <article className='exprience__details'>
                           <BsPatchCheckFill  className='exprience__details__icon' />
                             <div>
                                 <h4>test case</h4>
                                 <small className='text-light'>Experienced</small>
                             </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience;