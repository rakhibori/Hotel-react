import React, {useState} from 'react';
import { useGetRoomsQuery } from '../../../app/services/roomsApi';
import { useRemoveRoomMutation } from '../../../app/services/roomsApi';
import RoomHotel from './RoomHotel';
import { useNavigate } from 'react-router-dom';

const RoomsListHotel = ({setSelectedEditeRoom}) => {
    const {data: rooms, isLoading, isFetching, isError, error} = useGetRoomsQuery();
    const [removeFood] = useRemoveRoomMutation();
    const navigate = useNavigate();

    if(isLoading || isFetching) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }
    return ( 
        <>
        <div className='mainroomListBox'>
            <div className='roomListBox'>
                    <div className='roomListTitle'>
                        <div className='managmentControlPanelBox'>
                            <div><button onClick={()=>navigate('/addroom')}>درج</button></div>
                        </div>
                        <h1>اتاقها</h1>
                        <div className='managmentControlPanelBox'>
                        <div><button onClick={()=>navigate('/editeroom')}>ویرایش</button></div>
                        </div>
                    </div>
                    {
                        rooms.map(room => (
                            <div key={room.id}>
                                <RoomHotel room={room} id={room.id} name={room.name}  price={room.price} people={room.people} image={room.image} bed={room.bed} extera_person={room.extera_person} capacity={room.capacity} additional_service={room.additional_service} breakfast={room.breakfast} description={room.description} possibilities={room.possibilities} removeFood={removeFood} setSelectedEditeRoom={setSelectedEditeRoom}/>
                            </div>
                        ))
                    }    
                </div>
            </div>
        </>
     );
}
 
export default RoomsListHotel;