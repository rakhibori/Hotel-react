import React from 'react';

const Resturant = ({image, name, title, description}) => {
    return ( 
        <>
            <div className='resBox'>
                <div className='imgBox'>
                    <img src={image} alt={title}/>
                </div>
                <div className='desBox'>
                    <h2>{name}</h2>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
     );
}
 
export default Resturant;