import React from 'react';


const Package = ({id, name, image, title, description}) => {
    return ( 
        <>
            <div key={id} className='packageBox'>
                <div>
                    <img src={image} alt={title}/>
                </div>
                <div className='nameBox'>
                    <h2>{name}</h2>
                </div>
                <h4>{title}</h4>
                <div>
                    {
                        description.map(des => (
                            <p>* &nbsp; {des}</p>    
                        ))
                    }
                    
                </div>
            </div>
        </>
     );
}
 
export default Package;