import React, { useState } from 'react';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';
import RoomsListHotel from './rooms/RoomsListHotel';
import FoodsListHotel from './foods/FoodsListHotel';
import Users from './users/Users';
import RezervationInformation from './reservationInformation/ReservationInformation';

const ControlPanel = ({setSelectedEditeRoom, setSelectedEditeFood}) => {
    const [show, setShow] = useState('rooms')
    const [seletedUserRoomForEdite, setSeletedUserRoomForEdite] = useState([])
    const [night, setNight] = useState(1)
    return ( 
        <>
            <div>
                <Header/>

                <div className='controlPanelMainPage'>
                    <div className='linkControlPanelBox'>
                        <div className={show === 'rooms' && 'selectDiv'}><button onClick={()=>setShow('rooms')}>اتاقها</button></div>
                        <div className={show === 'foods' && 'selectDiv'}><button onClick={()=>setShow('foods')}>غذاها</button></div>
                        <div className={show === 'users' && 'selectDiv'}><button onClick={()=>setShow('users')}>کاربران</button></div>
                        <div className={show === 'reservationInfo' && 'selectDiv'}><button onClick={()=>setShow('reservationInfo')}>اطلاعات رزرواسیون</button></div>
                    </div>
                    <div className='showComponent'>

                        {
                            show === 'rooms' && <RoomsListHotel setSelectedEditeRoom={setSelectedEditeRoom}/> 
                        }

                        {
                            show === 'foods' && <FoodsListHotel setSelectedEditeFood={setSelectedEditeFood}/> 
                        }

                        {
                            show === 'users' && <Users setSelectedEditeRoom={setSelectedEditeRoom} setSelectedEditeFood={setSelectedEditeFood}/> 
                        }

                        {
                            show === 'reservationInfo' && <RezervationInformation seletedUserRoomForEdite={seletedUserRoomForEdite} setSeletedUserRoomForEdite={setSeletedUserRoomForEdite} night={night} setNight={setNight}/> 
                        }
                        
                        
                    </div>
                </div>
                <Footer/>
            </div>
        </>
     );
}
 
export default ControlPanel;