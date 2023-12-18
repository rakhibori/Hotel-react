import React from 'react';


const TouristPlace = ({id, image, title, description}) => {
    return ( 
        <>
            <div className='tourPlaceBox' key={id}>
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
 
export default TouristPlace;