import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

const UnSelectedRoom = () => {
    return ( 
        <>
            <div><FaCartShopping className='icon'></FaCartShopping></div>
            <div><p>اتاقی انتخاب نشده است</p></div>
        </>
     );
}
 
export default UnSelectedRoom;