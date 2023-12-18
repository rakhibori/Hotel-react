import React, {useState} from 'react';
import Header from '../../mainpage/Header';
import Footer from '../../mainpage/Footer';
import { useCreateFoodMutation } from '../../../app/services/foodsApi';

const AddFood = () => {
    const [createFood] = useCreateFoodMutation();
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [foodContents, setFoodContents] = useState([])
    const [resturant, setResturant] = useState('')

    const handleCreateNewRoom = async()=>{
        await createFood({name: name, image: image, price: price, category: category, food_contents: [foodContents], resturant: resturant});
        setName('')
        setImage('')
        setPrice('')
        setCategory('')
        setFoodContents('')
        setResturant('')

        alert('غذای جدید با موفیت اضافه شد .')
    }

    return ( 
        <>
            <Header/>  

            <div className='addFoodMainBox'>
                <h1>اضافه کردن غذای جدید</h1>
                <div className='addRoomBox'>
                    <input type='text' placeholder='نام غذا' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type='text' placeholder='آدرس عکس' value={image} onChange={(e)=>setImage(e.target.value)}/>
                    <input type='number' placeholder='قیمت' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                    <input type='text' placeholder='دسته بندی' value={category} onChange={(e)=>setCategory(e.target.value)}/>
                    <input type='text' placeholder='محتویات غذا' value={foodContents} onChange={(e)=>setFoodContents(e.target.value)}/>
                    <input type='text' placeholder='نام رستوران' value={resturant} onChange={(e)=>setResturant(e.target.value)}/>

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
 
export default AddFood;