import React, { useEffect, useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import { increment } from '../../../app/services/counterSlice';
import { useDispatch } from 'react-redux';
import { useUpdateRoomMutation } from '../../../app/services/roomsApi';

const Room = ({entryDate, exitDate, night, setNight, stayingTime, flagRezerv, setFlagRezerv, selectedMyRoom, setSelectedMyRoom, room, name, price, people, image, bed, extera_person, capacity, additional_service, breakfast, description, possibilities}) => {
    const [flagPossibilities, setFlagpossibilities] = useState(true);
    const dispatch = useDispatch()
    const [updateRoom] = useUpdateRoomMutation();
    


    const handleRezervRoom = (room) => {
        if(entryDate !== '' & exitDate !== '' & stayingTime !== ''){
            if(selectedMyRoom.length < 1) {
                var countCapacity = room.capacity
                if(countCapacity > 0) {
                    countCapacity -= 1
                    updateRoom({id: room.id, link:room.link, qty: room.qty,  name: room.name, image: room.image, breakfast: room.breakfast, price: room.price, additional_service: room.additional_service, people: room.people, extera_person: room.extera_person, capacity: countCapacity, oldEntryDate: entryDate, oldExitDate: exitDate, description: room.description, possibilities: room.possibilities})
                    setSelectedMyRoom([...selectedMyRoom, {id: room.id, link:room.link, qty: room.qty,  name: room.name, image: room.image, breakfast: room.breakfast, price: room.price, additional_service: room.additional_service, people: room.people, extera_person: room.extera_person, capacity: countCapacity, oldEntryDate: entryDate, oldExitDate: exitDate, description: room.description, possibilities: room.possibilities}]) 
                    dispatch(increment())
                    alert('اتاق شما با موفقیت انتخاب شد .')
                }
                
           }
           else{
                const temp = selectedMyRoom.filter(item => item.name === room.name)
                if(temp.length > 0){
                    alert('این اتاق قبلا انتخاب شده است .')   
                }else{
                        
                        if(countCapacity > 0) {
                            countCapacity -= 1
                            updateRoom({id: room.id, link:room.link, qty: room.qty,  name: room.name, image: room.image, breakfast: room.breakfast, price: room.price, additional_service: room.additional_service, people: room.people, extera_person: room.extera_person, capacity: countCapacity, oldEntryDate: entryDate, oldExitDate: exitDate, description: room.description, possibilities: room.possibilities})
                            setSelectedMyRoom([...selectedMyRoom, {id: room.id, link:room.link, qty: room.qty,  name: room.name, image: room.image, breakfast: room.breakfast, price: room.price, additional_service: room.additional_service, people: room.people, extera_person: room.extera_person, capacity: countCapacity, eDate: entryDate, oldExitDate: room.oldExitDate, description: room.description, possibilities: room.possibilities}]) 
                        }
                       
    
                    alert('اتاق شما با موفقیت انتخاب شد .')
                    dispatch(increment())            
                }
           }
            setFlagRezerv(true)
        }else{
            alert('لطفا تاریخ و مدت اقامت را مشخص نمایید')
        }
       
    }





    
    return ( 
        <>
        <div className={flagPossibilities? 'roomBox' : 'overWidth'}>
            <div className='nameBox'>
                <div style={{marginRight:'15px', marginTop:'7px'}}><h4>{name}</h4></div>
                {room.capacity === 0 && <h4 className='capesityTitle'>تکمیل ظرفیت</h4>}
            </div>
            <div className='imgBox'>
                <img src={image} alt={name}/>
                <div className='priceBox'>
                    <p>برای {Number(stayingTime)} شب </p>
                    <h5> {price * Number(stayingTime)} تومان</h5>
                </div>
                <div className='btnBoxBlockDisplay'>
                    <button onClick={()=>handleRezervRoom(room)}>ثبت رزرو</button>
                </div>
            </div>
            <div className='exteraBox'>
                <div className='h5Box'>
                    <h5> نوع سرویس اضافه : {additional_service}</h5>
                </div>
                <div className='peopleBox'>
                    <div><p>تعداد : {people} نفر</p></div>
                    <div><p>صبحانه : {breakfast}</p></div>
                    <div><p>نفر اضافه : {extera_person} نفر</p></div>
                    <div><p>ظرفیت : {capacity} اتاق</p></div>
                    <div className='btnBox'>
                        <button onClick={()=>setFlagpossibilities(!flagPossibilities)}>امکانات <FaChevronDown className='icon'></FaChevronDown></button>
                    </div>
                </div>
            </div>
            <div className='borderTop'>
                <div className='desBox'>
                    <p>{description}</p>
                </div>
            </div>
            <div className='posBox'>
                {
                    possibilities.map(item => (
                       <p>{item}</p>
 
                    ))
                }
            </div>
        </div>
        </> 
     );
}
 
export default Room;