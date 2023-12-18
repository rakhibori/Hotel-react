import React from 'react';

const ShoppingCenter = ({id, image, title, description}) => {
    return ( 
        <>
             <div className='shoppingCenterBox' key={id}>
                <div>
                    <img src={image} alt={title}/>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
     );
}
 
export default ShoppingCenter;