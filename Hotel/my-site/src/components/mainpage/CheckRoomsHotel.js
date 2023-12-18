import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker   from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import opacity from "react-element-popper/animations/opacity"
import { useGetFoodsQuery } from '../../app/services/foodsApi';
import { FaFacebook, FaTwitter, FaInstagram,  FaEnvelope } from "react-icons/fa6";
import Header from './Header';
import Footer from './Footer';

const CheckRoomsHotel = ({entryDate, setEntryDate, exitDate, setExitDate, stayingTime, setStayingTime, setFoodSearch}) => {
    const {data: foods, isLoading, isFetching, isError, error} = useGetFoodsQuery()
    const [foodName, setFoodName] = useState('')
    const navigate = useNavigate();
    const [enDate, setEnDate] = useState(new Date())
    const [exDate, setExDate] = useState(new Date())

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


    
    return ( 

        <>

            <Header/>
            <div className='borderDiv'></div>
            <div className='mainCheckRoomsHotelBox'>
                <div className='checkRoomBox'>
                    <div className='iconBox'><FaFacebook className='icon'></FaFacebook><FaTwitter className='icon'></FaTwitter><FaInstagram className='icon'></FaInstagram><FaEnvelope className='icon'></FaEnvelope></div>
                    <div className='formBox'>
                        <button onClick={handleCheckRoom}>بررسی موجود بودن اتاق</button>
                        <select style={{marginLeft:'20px'}} value={stayingTime} onChange={(e)=>setStayingTime(e.target.value)}>
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
                        {/* <label for="entryDate">تاریخ ورود : </label>
                        <input type='date' value={entryDate} onChange={(e)=> setEntryDate(e.target.value)}/>
                        <label for="exitDate">تاریخ خروج : </label>
                        <input type='date' name='exitDate' id='exitDate' value={exitDate} onChange={(e)=> setExitDate(e.target.value)}/> */}

                        <label for="entryDate">تاریخ ورود : </label>
                        <DatePicker className='DatePicker' id='entryDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={enDate} onChange={setEnDate}/>
                        <label for="exitDate">تاریخ خروج : </label>
                        <DatePicker className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={exDate} onChange={setExDate}/>
                    </div>
                </div>
            </div>

            <Footer/>

        </>
       
     );
}
 
export default CheckRoomsHotel;