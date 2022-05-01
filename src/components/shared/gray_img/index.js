import React from 'react';
import  './style.css';

const Grayimg = (props) => {
    return (
        <div>
            <img className='gray-img' src={props.img_url}/>
        </div>
    )
}

export default Grayimg;