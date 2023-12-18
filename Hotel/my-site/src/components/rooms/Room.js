import React, { useEffect, useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import { increment } from '../../app/services/counterSlice';
import { useDispatch } from 'react-redux';
import { useUpdateRoomMutation } from '../../app/services/roomsApi';
import { useGetUsersRoomsQuery } from '../../app/services/usersRoomsApi'

const Room = ({entryDate, exitDate, night, setNight, stayingTime, flagRezerv, setFlagRezerv, selectedMyRoom, setSelectedMyRoom, room, name, price, people, image, bed, extera_person, capacity, additional_service, breakfast, description, possibilities}) => {
    const {data: usersRooms, isLoading} = useGetUsersRoomsQuery();
    const [flagPossibilities, setFlagpossibilities] = useState(true);
    const dispatch = useDispatch()
    const [updateRoom] = useUpdateRoomMutation();
    const array = []
    

    useEffect(()=>{
        if(stayingTime === 'دو شب'){
            setNight(2)
        }
        if(stayingTime === 'سه شب'){
            setNight(3)
        }
        if(stayingTime === 'چهار شب'){
            setNight(4)
        }
        if(stayingTime === 'پنج شب'){
            setNight(5)
        }
        if(stayingTime === 'شش شب'){
            setNight(6)
        }
        if(stayingTime === 'هفت شب'){
            setNight(7)
        }
        if(stayingTime === 'هشت شب'){
            setNight(8)
        }
        if(stayingTime === 'نه شب'){
            setNight(9)
        }
        if(stayingTime === 'ده شب'){
            setNight(10)
        }
        if(stayingTime === 'یازده شب'){
            setNight(11)
        }
        if(stayingTime === 'دوازده شب'){
            setNight(12)
        }
        if(stayingTime === 'سیزده شب'){
            setNight(13)
        }
        if(stayingTime === 'چهارده شب'){
            setNight(14)
        }
        if(stayingTime === 'پانزده شب'){
            setNight(15)
        }
        if(stayingTime === 'شانزده شب'){
            setNight(16)
        }
        if(stayingTime === 'هفده شب'){
            setNight(17)
        }
        if(stayingTime === 'هجده شب'){
            setNight(18)
        }
        if(stayingTime === 'نوزده شب'){
            setNight(19)
        }
        if(stayingTime === 'بیست شب'){
            setNight(20)
        }
        
    }, [night])

    if(isLoading) {
        return<div>Loading...</div>        
    }


    const temp = usersRooms.filter(user => !((entryDate < user.entryDate & exitDate <= user.entryDate) | entryDate >= user.exitDate))

    
    const handleRezervRoom = (room) => {
        if(selectedMyRoom.length < 1) {
            updateRoom({id: room.id, link:room.link, qty: room.qty,  name: room.name, image: room.image, breakfast: room.breakfast, price: room.price, additional_service: room.additional_service, people: room.people, extera_person: room.extera_person, capacity: room.capacity, oldEntryDate: entryDate, oldExitDate: exitDate, description: room.description, possibilities: room.possibilities})
            setSelectedMyRoom([...selectedMyRoom, {id: room.id, link:room.link, qty: room.qty,  name: room.name, image: room.image, breakfast: room.breakfast, price: room.price, additional_service: room.additional_service, people: room.people, extera_person: room.extera_person, capacity: room.capacity, oldEntryDate: entryDate, oldExitDate: exitDate, description: room.description, possibilities: room.possibilities}]) 
            dispatch(increment())
            alert('اتاق شما با موفقیت انتخاب شد .')
            
            
       }
       else{
            const temp = selectedMyRoom.filter(item => item.name === room.name)
            if(temp.length > 0){
                alert('این اتاق قبلا انتخاب شده است .')   
            }else{
                updateRoom({id: room.id, qty: room.qty, link:room.link,  name: room.name, image: room.image, breakfast: room.breakfast, price: room.price, additional_service: room.additional_service, people: room.people, extera_person: room.extera_person, capacity: room.capacity, oldEntryDate: entryDate, oldExitDate: exitDate, description: room.description, possibilities: room.possibilities})
                setSelectedMyRoom([...selectedMyRoom, {id: room.id, link:room.link, qty: room.qty,  name: room.name, image: room.image, breakfast: room.breakfast, price: room.price, additional_service: room.additional_service, people: room.people, extera_person: room.extera_person, capacity: room.capacity, eDate: entryDate, oldExitDate: room.oldExitDate, description: room.description, possibilities: room.possibilities}]) 
                alert('اتاق شما با موفقیت انتخاب شد .')
                dispatch(increment())            
            }
       }
        setFlagRezerv(true)
    }


    return ( 
        <>
        <div className={flagPossibilities? 'roomBox' : 'overWidth'}>
            <div className='nameBox'>
                <div className='nameDiv'><h4>{name}</h4></div>
                {temp.map(item=> item.roomsSelected.map(it => it.id === room.id && array.push(it.id)))}
                {array.length > 0 && <h4 className='capesityTitle'>امکان رزرو اتاق در این تاریخ وجود ندارد</h4>}
            </div>
            <div className='imgBox'>
                <img src={image} alt={name}/>
                <div className='priceBox'>
                    <p>برای {night} شب </p>
                    <h5> {price * `${night}`} تومان</h5>
                </div>
                <div className='btnBoxBlockDisplay'>
                    <button onClick={()=>handleRezervRoom(room)} disabled={array.length > 0} className={array.length > 0 ? "disabledStyle":"normalStyle"}>ثبت رزرو</button>
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
                    {/* <div><p>ظرفیت : {capacity} اتاق</p></div> */}
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