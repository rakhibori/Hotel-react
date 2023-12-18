import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker   from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import opacity from "react-element-popper/animations/opacity"
import { useGetFoodsQuery } from '../../app/services/foodsApi';
import { FaFacebook, FaTwitter, FaInstagram,  FaEnvelope } from "react-icons/fa6";

const ChechRoom = ({setExitDate, setEntryDate, stayingTime, setStayingTime, setFoodSearch, setMessage}) => {
    const {data: foods, isLoading, isFetching, isError, error} = useGetFoodsQuery()
    const [foodName, setFoodName] = useState('')
    const navigate = useNavigate();
    const [enDate, setEnDate] = useState(new Date())
    const [exDate, setExDate] = useState(new Date())

    useEffect(() =>{
        setFoodSearch([])
    }, [])

    if(isLoading || isFetching) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }

    const handleCheckRoom = () => {
        setEntryDate(enDate.toString())
        setExitDate(exDate.toString())
        if(stayingTime){
            navigate('/roomsList')
        }else{
            alert('لطفا تاریخ و مدت اقامت را مشخص نمایید .')
        }     
    }

    const handleSearchFood = () => {
        if(foodName){
            const temp = foods.filter(food => food.name.includes(foodName));
            if(temp.length > 0){
                setFoodSearch(temp) 
                navigate('/foodssearchlist')
            }else{
                setMessage('غذایی با این نام پیدا نکردیم');
                navigate('/foodssearchlist')
            }    
        }else{
            alert('لطفا نام غذایی که می خواهید سفارش دهید را وارد نمایید')
        }
    }

    
    return ( 

        <div className='mainCheckRoomBox'>
            <div className='checkRoomBox'>
                <div className='iconBox'><FaFacebook className='icon'></FaFacebook><FaTwitter className='icon'></FaTwitter><FaInstagram className='icon'></FaInstagram><FaEnvelope className='icon'></FaEnvelope></div>
                <div className='formBox'>
                    <button onClick={handleCheckRoom}>بررسی موجود بودن اتاق</button>
                    <select value={stayingTime} onChange={(e)=>setStayingTime(e.target.value)}>
                        <option>مدت اقامت</option>
                        <option>یک شب</option>
                        <option>دو شب</option>
                        <option>سه شب</option>
                        <option>چهار شب</option>
                        <option>پنج شب</option>
                        <option>شش شب</option>
                        <option>هفت شب</option>
                        <option>هشت شب</option>
                        <option> نه شب</option>
                        <option>ده شب</option>
                        <option>یازده شب</option>
                        <option>دوازده شب</option>
                        <option>سیزده شب</option>
                        <option>چهارده شب</option>
                        <option>پانزده شب</option>
                        <option>شانزده شب</option>
                        <option>هفده شب</option>
                        <option>هجده شب</option>
                        <option>نوزده شب</option>
                        <option>بیست شب</option>
                    </select>


                    <label for="entryDate">تاریخ ورود : </label>
                    <DatePicker className='DatePicker' id='entryDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={enDate} onChange={setEnDate}/>
                    <label for="exitDate">تاریخ خروج : </label>
                    <DatePicker className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={exDate} onChange={setExDate}/>
                </div>
            </div>
            <div className='searchFoodBox'>
                <button onClick={handleSearchFood}>جستجوی غذا</button>
                <input type='text' placeholder='لطفا نام غذایی که می خواهید سفارش دهید را وارد نمایید' value={foodName} onChange={(e)=> setFoodName(e.target.value)}/>
                {/* <div style={{color:'red'}}>{message}</div> */}
            </div>
        </div>
       
     );
}
 
export default ChechRoom;