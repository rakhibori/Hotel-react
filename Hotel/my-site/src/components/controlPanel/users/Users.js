import React, { useState } from 'react'
import ReservRoomUsers from './ReservRoomUsers';
import ReservFoodUsers from './ReservFoodUsers';

const Users = () => {
    const[show, setShow] = useState('reservRoom')
    return ( 
        <>
             <div className='mainUserBox'>
                
                <div className='userBoxBtn'>
                    <div className={show === 'reservRoom' && 'selectDiv'}><button onClick={()=>setShow('reservRoom')}>رزرو اتاق</button></div>
                    <h1>کاربران</h1>
                    <div className={show === 'orderFood' && 'selectDiv'}><button onClick={()=>setShow('orderFood')}>سفارش غذا</button></div>
                </div>
                <div>
                    {
                        show === 'reservRoom' && <ReservRoomUsers/>
                    }

{
                        show === 'orderFood' && <ReservFoodUsers/>
                    }
                </div>
            </div>
        </>
     );
}
 
export default Users;