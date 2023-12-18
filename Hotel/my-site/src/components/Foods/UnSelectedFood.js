import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

const UnSelectedFood = () => {
    return ( 
        <>
            <div><FaCartShopping className='icon'></FaCartShopping></div>
            <div><p>غذایی انتخاب نشده است</p></div>
        </>
     );
}
 
export default UnSelectedFood;