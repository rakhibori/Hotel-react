import React, { useState } from 'react';
import { FaChevronLeft, FaHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const SampleRoom = ({id, image, name, link, description, possibilities}) => {
    const navigat = useNavigate();
    const [like, setLike] = useState(false);
    return ( 
        <>
            <div className='roomMainBox' key={id}>
                <img src={image} alt={name}></img>
                <h2>{name}</h2>
                <p>{description}</p>
                <FaChevronLeft className='icon'></FaChevronLeft><button onClick={()=>navigat(`${link}`)}>جزییات بیشتر</button>
                <div className='iconheartBox'>
                    <FaHeart className= {like ? 'redStyle' : 'icon'} onClick={()=>setLike(!like)}></FaHeart>
                </div>
            </div>
        </>
     );
}
 
export default SampleRoom;