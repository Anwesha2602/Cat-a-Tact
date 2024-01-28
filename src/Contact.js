import React from 'react';

export  default function Contact(props){
    return(
        <div className='contact-card'>
            <div className='image-wrapper'>
              <img className="contact-image blur" src={process.env.PUBLIC_URL + props.img}/>
              <div className='content fade'>{props.content}</div>
            </div>
            <h3>{props.name}</h3>
            <div className='info-group'>
                <i class="fa-solid fa-mobile-screen"></i>  <p>{props.number}</p>
            </div>
            <div className='info-group'>
                <i className="fa-regular fa-envelope"></i><p>{props.email}</p>
            </div>
        </div>
    )
}