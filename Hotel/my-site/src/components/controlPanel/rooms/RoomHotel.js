import React, {useState} from 'react';
import { FaChevronDown } from "react-icons/fa6";

const RoomHotel = ({removeFood, id, room, name, price, people, image, bed, extera_person, capacity, additional_service, breakfast, description, possibilities, setSelectedEditeRoom}) => {
    const [flagPossibilities, setFlagpossibilities] = useState(true);
    
    const handleRemoveRoom = (id) =>{
        removeFood(id)  
        alert(`اتاق ${name} با موفقیت حذف شد .`)  
    }
    return ( 
        <>
        <div className={flagPossibilities? 'roomBox' : 'overWidth'}>
            <div className='nameBox'>
                <div className='nameDiv'><h4>{name}</h4></div>
            </div>
            <div className='imgBox'>
                <img src={image} alt={name}/>
                <div className='priceBox'>
                    <p>برای یک شب</p>
                    <h5> {price} تومان</h5>
                </div>
                <div className='btnBoxBlockDisplay'>
                    <button onClick={()=>setSelectedEditeRoom(room)}>انتخاب</button>
                    <button onClick={()=>handleRemoveRoom(id)}>حذف</button>
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
 
export default RoomHotel;