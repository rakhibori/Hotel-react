import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa6";
import { useGetSampleRoomsQuery } from '../../app/services/roomsApi';
import { useNavigate } from 'react-router-dom';

const SampleRoom = ({name, description, image}) => {
    const {data: rooms, isLoading, isFetching, isError, error} = useGetSampleRoomsQuery()
    const navigate = useNavigate()

    if(isLoading || isFetching) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }
   
    return ( 
            <div className='sampleRoomBox'>
                {
                rooms.map(room => (
                    <div className='roomBox' key={room.id}>
                        <img src={room.image} alt={room.name}/>
                        <h2>{room.name}</h2> 
                        <p>{room.description ? room.description : 'هر اتاق سه تخته ی خانواده شامل سیستم تهویه ی مطبوع هوا، تلویزیون مسطح همراه با کانال های تلویزیونی بین المللی، اینترنت، تخت دونفره ی دبل و سرویس بهداشتی و حمام می باشد. این اتاق ها به دلیل ادغام مدرنیته و سنت، در عین زیبایی، راحتی را هم برای شما به ارمغان می آورند. '}</p>
                        <FaChevronLeft></FaChevronLeft><Link to={`${room.link}`}>ادامه مطلب</Link>
                    </div>
                ) )
            }
            </div>
        
     );
}
 
export default SampleRoom;