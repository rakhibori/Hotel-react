import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetSampleRoomsQuery } from '../../../app/services/roomsApi';
import { useUpdateRoomMutation } from '../../../app/services/roomsApi';

const SelectedRoom = ({setFlagRezerv, selectedMyRoom, stayingTime}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const {data: rooms, isLoading} = useGetSampleRoomsQuery();
    
    const [updateRoom] = useUpdateRoomMutation()
    const navigat = useNavigate();

    useEffect(()=>{
        totalCalc()  
    }, [rooms, stayingTime]) 
    

    if(isLoading) {
        return<div>Loading...</div>        
    }
   
    
    
    const handlePlusCount = async(room)=>{ 
        var countRoom = 1;
        var countCapacity = 0;
        const temp = rooms.filter(item => item.id === room.id)
        const roomCapacity = temp[0].capacity
        const roomQty = temp[0].qty
        const index = selectedMyRoom.indexOf(room);
        if(roomCapacity > 0) {
            countRoom += roomQty 
            countCapacity = roomCapacity -1 
            updateRoom({id: selectedMyRoom[index].id, link:room.link, qty: countRoom,  name: selectedMyRoom[index].name, image: selectedMyRoom[index].image, breakfast: selectedMyRoom[index].breakfast, price: selectedMyRoom[index].price, additional_service: selectedMyRoom[index].additional_service, people: selectedMyRoom[index].people, extera_person: selectedMyRoom[index].extera_person, capacity: countCapacity, description: selectedMyRoom[index].description, possibilities: selectedMyRoom[index].possibilities})   
        }else{
            alert("ظرفیت این اتاق تکمیل است .")
        }
        
    }

    const handleMinusCount = (room) => {
        const index = selectedMyRoom.indexOf(room);
        const temp = rooms.filter(item => item.id === room.id)
        var countRoom = temp[0].qty
        var countCapacity = temp[0].capacity
        if(countRoom > 1 & countCapacity < 5) {
            countRoom -= 1
            countCapacity += 1
            updateRoom({id: selectedMyRoom[index].id, link:room.link, qty: countRoom,  name: selectedMyRoom[index].name, image: selectedMyRoom[index].image, breakfast: selectedMyRoom[index].breakfast, price: selectedMyRoom[index].price, additional_service: selectedMyRoom[index].additional_service, people: selectedMyRoom[index].people, extera_person: selectedMyRoom[index].extera_person, capacity: countCapacity, description: selectedMyRoom[index].description, possibilities: selectedMyRoom[index].possibilities})
        }else{
            if(countCapacity < 5){
                countCapacity += 1
                updateRoom({id: selectedMyRoom[index].id, link:room.link, qty: countRoom,  name: selectedMyRoom[index].name, image: selectedMyRoom[index].image, breakfast: selectedMyRoom[index].breakfast, price: selectedMyRoom[index].price, additional_service: selectedMyRoom[index].additional_service, people: selectedMyRoom[index].people, extera_person: selectedMyRoom[index].extera_person, capacity: countCapacity, description: selectedMyRoom[index].description, possibilities: selectedMyRoom[index].possibilities})
            }
            selectedMyRoom.splice(index, 1) 
            alert('اتاق انتخابی شما حذف شد .')  
        }
        if(selectedMyRoom.length === 0){
            setFlagRezerv(false) 
        }
    }

    

    



    const totalCalc = ()=>{
        var roomQty = 0
        let sum = 0;
        for(let i = 0; i < selectedMyRoom.length; i++){
            const temp = rooms.filter(room => room.id === selectedMyRoom[i].id)
            roomQty = temp[0].qty
            console.log(temp)
            sum += (roomQty * selectedMyRoom[i].price * Number(stayingTime))
            } 
            setTotalPrice(sum)
    }   

    
    
    return ( 
        <div>
            <div className='selectedmainRoomBox'>
            {
                selectedMyRoom.map(room => (
                   <>
                        <div className='selectedRoomBox'>
                            <div className='namePriceBox'>
                                <div className='name'>{room.name}</div>
                                <div className='price'>{rooms.map(item => item.id === room.id && item.qty * room.price * Number(stayingTime))} تومان</div>
                            </div>
                            <div className='changeCountBox'>
                                <button onClick={()=>handlePlusCount(room)}>+</button>
                                {
                                    rooms.map(item => item.id === room.id && item.qty)     
                                } اتاق
                                <button onClick={()=>handleMinusCount(room)}>-</button>
                            </div>
                        </div> 
                   </>
                ))
            }
            </div>
            <div className='totalPrice'>
                <div className='total'>جمع کل</div>
                <div className='price'>{totalPrice} تومان</div>
            </div>
            <div>
                <button onClick={()=> navigat('/rezervationInfo')} className='btn'>ثبت رزرو</button>
            </div>     
            
        </div>
     );
}
 
export default SelectedRoom;