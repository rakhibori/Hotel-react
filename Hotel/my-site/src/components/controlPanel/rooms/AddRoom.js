import React, {useState} from 'react';
import Header from '../../mainpage/Header';
import Footer from '../../mainpage/Footer';
import { useCreateRoomMutation } from '../../../app/services/roomsApi';

const AddRoom = () => {
    const [createRoom] = useCreateRoomMutation();
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState((''))
    const [additionalService, setAdditionalService] = useState((''))
    const [people, setPeople] = useState((''))
    const [exteraPerson, setExteraPerson] = useState((''))
    const [capacity, setCapacity] = useState((''))
    const [description, setDescription] = useState('')
    const [possibilities, setPossibilities] = useState([])

    const handleCreateNewRoom = async()=>{
        await createRoom({name: name, image: image, price: price, additional_service: additionalService, people: people, extera_person: exteraPerson, capacity: capacity, description:description, possibilities: [possibilities]});
        setName('')
        setImage('')
        setPrice('')
        setAdditionalService('')
        setPeople('')
        setExteraPerson('')
        setCapacity('')
        setDescription('')
        setPossibilities('')
        alert('اتاق جدید با موفیت اضافه شد .')
    }

    return ( 
        <>
            <Header/>  

            <div className='addRoomMainBox'>
                <h1>اضافه کردن اتاق جدید</h1>
                <div className='addRoomBox'>
                    <input type='text' placeholder='نام اتاق' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type='text' placeholder='آدرس عکس' value={image} onChange={(e)=>setImage(e.target.value)}/>
                    <input type='number' placeholder='قیمت' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                    <input type='text' placeholder='نوع سرویس اضافه' value={additionalService} onChange={(e)=>setAdditionalService(e.target.value)}/>
                    <input type='number' placeholder='تعداد ' value={people} onChange={(e)=>setPeople(e.target.value)}/>
                    <input type='number' placeholder='نفر اضافه' value={exteraPerson} onChange={(e)=>setExteraPerson(e.target.value)}/>
                    <input type='number' placeholder='ظرفیت' value={capacity} onChange={(e)=>setCapacity(e.target.value)}/>
                    <textarea placeholder='توضییحات اتاق' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    <input type='text' placeholder='امکانات اتاق' value={possibilities} onChange={(e)=>setPossibilities(e.target.value)}/>

                    <div className='btnBox'>
                        <button onClick={handleCreateNewRoom}>درج کردن</button>
                    </div>
                </div>
                
            </div>
            <br/>
            <br/>
            <Footer/>   
        </>
     );
}
 
export default AddRoom;