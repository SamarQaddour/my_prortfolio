import React from "react";
import './portfolio.css';
import chat from '../../assets/chat.png';
import websiteDefi from '../../assets/defiwebsite.png';
import shop from '../../assets/shop.png';
import portolio from '../../assets/portfolioNew.png';
import commerce from '../../assets/commerce_samar.png';
const Portfolio = () => {
    const data = [
        {
       id:1,
       image:chat,
       title:'Chat_Application',
       github:'https://github.com/SamarQaddour/Chat_Application',
       demo:'https://chat-application-new94.netlify.app/Login'
    },
        {
       id:2,
       image:commerce,
       title:'Personal protofolio',
       github:'https://github.com/SamarQaddour/commerce-samar',
       demo:'https://my-new-commerce.netlify.app/'
    },
        {
            id:3,
       image:websiteDefi,
       title:'Responsive WebSite',
       github:'https://github.com/SamarQaddour/defi',
       demo:'https://my-defi.netlify.app/'
    },
        {
       id:4,
       image:shop,
       title:'coolShop like as amazona',
       github:'https://github.com/SamarQaddour/coolshop',
       demo:'https://coolshop-amazon.netlify.app/'
    },
        {
       id:5,
       image:portolio,
       title:'Personal protofolio',
       github:'https://github.com/SamarQaddour/my_prortfolio',
       demo:'https://mypersonalportfoliosamar.netlify.app/'
    },
    ]
    return(
     <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
         <div className='container protfolio__container'>
             {
                 data.map(({id,image,title,githup,demo}) => {
               return(
                   <article className='portfolio__item'>
                       <div className='portfolio__item__image'>
                           <img src={image} alt={title} />
                       </div>
                       <h3>{title}</h3>
                       <div className='portfolio__item__cta'>
                           <a href={githup} className='btn'  target='_blank' rel='noreferrer'>Githup</a>
                           <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                       </div>
                   </article>
               )
                 })}
         </div>
     </section>
    )
}
export default Portfolio;