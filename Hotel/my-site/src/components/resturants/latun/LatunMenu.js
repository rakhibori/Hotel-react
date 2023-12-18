import React from 'react';

const LatunMenu = ({name, image, food_contents, price, category, type}) => {
    
    return ( 
        <>
            <div className='mocktailsBox'>
                <div className='imgBox'>
                    <img src={image} alt={name}/>
                </div>
                <div className='pBox'>
                    <p>{price} تومان</p>
                </div>
                <div className='nameBox'>
                    <h3>{name}</h3>  
                    <p>{food_contents}</p>
                </div> 
            </div>
        </>
     );
}
 
export default LatunMenu;