import React from 'react';
import Contact from './Contact';
import CatData from './CatData';

export default function App(){
    const cats = CatData.map(cat => {
        return (<Contact img= {cat.img} name = {cat.name} number = {cat.number} email ={cat.email} content = {cat.content} />
        )
    })
    return(
        <div>
        <h1>Whiskerful Chronicles:Hilarious Cat-tacts</h1>
            <div className='contacts'>
            {cats}
            </div>
        </div>

    )

}
