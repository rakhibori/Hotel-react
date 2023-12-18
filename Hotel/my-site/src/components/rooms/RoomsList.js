import React, { useEffect, useState } from 'react';
import Room from './Room';
import UnSelectedRoom from './UnSelectedRoom';
import SelectedRoom from './SelectedRoom';
import { useGetRoomsQuery } from '../../app/services/roomsApi';
import { FaStar } from "react-icons/fa6";
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';


const RoomsList = ({entryDate, exitDate, stayingTime, selectedMyRoom,  setSelectedMyRoom, roomCount, setRoomCount}) => {
    const {data: rooms, isLoading, isError, error} = useGetRoomsQuery();
    const [night, setNight] = useState(1);
    const [flagRezerv, setFlagRezerv] = useState(false);

    
    if(isLoading) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }



    return ( 
        <>
            <Header/>

            <div className='borderBox'></div>
            <div className='videoBox'>
                <video controls loop>
                    <source src={"./video/1.mp4"} type="video/mp4"/>
                </video>
                <div className='titleVideoBox'>
                    <p>فان سنتر ،مرکز تفریحی هتل آریا طبقه -۳</p>
                </div>
            </div>
             <div className='mainroomListBox'>
                <div className='hotelAriyaBox'>
                    <div className='imgBox'>
                        <img src={'./image/ariya/1.jpg'} alt='ariya'></img>
                        <div className='starBox'>
                            <div><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar></div>
                            <div><p>هتل آریا</p></div>
                        </div>
                    </div>
                    <div className='dateBox'>
                        <div><h5>{entryDate} - {exitDate}</h5></div>
                        <div><p>تاریخ اقامت</p></div>
                    </div>
                    <div>
                        <div className={flagRezerv ? 'cartBoxUnselectedNoneDisplay' : 'cartBoxUnselectedBlockDisplay'}>
                            <UnSelectedRoom/>                                  
                        </div>
                        <div className={flagRezerv ?'cartBoxSelectedBlockDisplay' : 'cartBoxSelectedNoneDisplay'}>
                            <SelectedRoom  night={night} setFlagRezerv={setFlagRezerv} selectedMyRoom={selectedMyRoom} setSelectedMyRoom={setSelectedMyRoom}/>
                        </div>
                    </div>
                    
                </div>
                <div className='roomListBox'>
                    {
                        rooms.map(room => (
                            <div key={room.id}>
                                <Room id={room.id}flagRezerv={flagRezerv} setFlagRezerv={setFlagRezerv} selectedMyRoom={selectedMyRoom} setSelectedMyRoom={setSelectedMyRoom} exitDate={exitDate} entryDate={entryDate} stayingTime={stayingTime} room={room} name={room.name}  price={room.price} people={room.people} image={room.image} bed={room.bed} extera_person={room.extera_person} capacity={room.capacity} additional_service={room.additional_service} breakfast={room.breakfast} description={room.description} possibilities={room.possibilities} night={night} setNight={setNight}/>
                            </div>
                        ))
                    }    
                </div>
            </div>

            <Footer/>
        </>
       
     );
}
 
export default RoomsList;