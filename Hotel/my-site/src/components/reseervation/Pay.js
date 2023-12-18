import React, { useState } from 'react';
import ReservsPay from './ReservsPay';
import OrdersPay from './OrdersPay';

const Pay = ({cutomersFood, bookersRoom, selectedMyRoom, selectedMyFood}) => {
    const [show, setShow] = useState('پرداخت هزینه رزروها');
    const [night, setNight] = useState(1);
    return ( 
        <>
            <div className='payMainBox'>
                <div className='linkRezervationBox'>
                    <div className={show === 'پرداخت هزینه رزروها' && 'selectDiv'} style={{width:'145px', height:'45px'}}><button onClick={()=>setShow('پرداخت هزینه رزروها')}>پرداخت هزینه رزروها</button></div>
                    <div className={show === 'پرداخت هزینه سفارشات' && 'selectDiv'} style={{width:'145px', height:'45px'}}><button onClick={()=>setShow('پرداخت هزینه سفارشات')}>پرداخت هزینه سفارشات</button></div>
                </div>
                <div>
                    {show === 'پرداخت هزینه رزروها' && <ReservsPay night={night} setNight={setNight} bookersRoom={bookersRoom} selectedMyRoom={selectedMyRoom}/>}
                    {show === 'پرداخت هزینه سفارشات' && <OrdersPay cutomersFood={cutomersFood} selectedMyFood={selectedMyFood}/>}
                    
                </div>
            </div>
        </>
     );
}
 
export default Pay;