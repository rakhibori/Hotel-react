import React, {useState} from 'react';
import { useUpdateFoodMutation } from '../../../app/services/foodsApi';
import Header from '../../mainpage/Header';
import Footer from '../../mainpage/Footer';

const EditeFood = ({selectedEditeFood}) => {
    const [updateFood] = useUpdateFoodMutation();
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [foodContents, setFoodContents] = useState([])
    const [resturant, setResturant] = useState('')

    const handleEditeFood = async()=>{
        await updateFood({id: selectedEditeFood.id, name: name, image: image, price: price, category: category, food_contents: [foodContents], resturant: resturant});
        setName('')
        setImage('')
        setPrice('')
        setCategory('')
        setFoodContents('')
        setResturant('')
        alert(`غذای ${selectedEditeFood.name} با موفقیت ویرایش شد .`)
    }
    return ( 
        <>
            <Header/>  

            <div className='addFoodMainBox'>
                <h1>ویرایش کردن غذا</h1>
                <div className='pBox'>
                    <p>{!selectedEditeFood ? `غذای انتخاب شده : ${selectedEditeFood.id} - ${selectedEditeFood.name}` : 'غذایی انتخاب نشده است'}</p>
                </div>
                <div className='addRoomBox'>
                <input type='text' placeholder='نام غذا' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type='text' placeholder='آدرس عکس' value={image} onChange={(e)=>setImage(e.target.value)}/>
                    <input type='number' placeholder='قیمت' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                    <input type='text' placeholder='دسته بندی' value={category} onChange={(e)=>setCategory(e.target.value)}/>
                    <input type='text' placeholder='محتویات غذا' value={foodContents} onChange={(e)=>setFoodContents(e.target.value)}/>
                    <input type='text' placeholder='نام رستوران' value={resturant} onChange={(e)=>setResturant(e.target.value)}/>

                    <div className='btnBox'>
                        <button onClick={handleEditeFood}>ویرایش کردن</button>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <Footer/>       
        </>
     );
}
 
export default EditeFood;