import React, { useState } from 'react'
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';
import ReservList from './ReservsList';
import OrdersList from './OredersList';
import ReservationForm from './RezervationForm';
import Pay from './Pay';

const Reservation = ({selectedMyRoom, selectedMyFood, cutomersFood, bookersRoom, setBookersRoom}) => {
    const [show, setShow] = useState('لیست رزروها')
    const [night, setNight] = useState(1)
    return ( 
        <>
            <Header/>

            <div className='rezervationMainBox'>
                <div className='linkRezervationBox'>
                    <div className={show === 'لیست رزروها' && 'selectDiv'}><button onClick={()=>setShow('لیست رزروها')}>لیست رزروها</button></div>
                    <div className={show === 'لیست سفارشات' && 'selectDiv'}><button onClick={()=>setShow('لیست سفارشات')}>لیست سفارشات</button></div>
                    <div className={show === 'فرم رزرواسیون' && 'selectDiv'}><button onClick={()=>setShow('فرم رزرواسیون')}>فرم رزرواسیون</button></div>
                    <div className={show === 'پرداخت هزینه' && 'selectDiv'}><button onClick={()=>setShow('پرداخت هزینه')}>پرداخت هزینه</button></div>
                </div>
                <div>
                    {show === 'لیست رزروها' && <ReservList night={night} setNight={setNight}/>}
                    {show === 'لیست سفارشات' && <OrdersList/>}
                    {show === 'فرم رزرواسیون' && <ReservationForm selectedMyRoom={selectedMyRoom} setBookersRoom={setBookersRoom}/>}
                    {show === 'پرداخت هزینه' && <Pay cutomersFood={cutomersFood} bookersRoom={bookersRoom} selectedMyRoom={selectedMyRoom} selectedMyFood={selectedMyFood}/>}
                </div>
            </div>

            <Footer/>
        </>
     );
}
 
export default Reservation;