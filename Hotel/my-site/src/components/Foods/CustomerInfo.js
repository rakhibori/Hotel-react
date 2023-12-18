import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker   from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import opacity from "react-element-popper/animations/opacity"
import {useFormik} from 'formik'
import { Validate } from './Validate';
import img from '../../image/ariya/2.jpg'
import { useGetFoodsQuery } from '../../app/services/foodsApi';
import { useCreateUsersFoodsMutation } from '../../app/services/usersFoodsApi';

const CustomerInfo = ({selectedMyFood, setCutomersFood}) => {
    const {data: foods, isLoading} = useGetFoodsQuery();
    const [createUsersFoods] = useCreateUsersFoodsMutation();
    const form = useFormik({
        initialValues:{name:'', family:'', mobile:'', roomNumber:'', nationalCode:'', email:''},
        onSubmit:(values, {setSubmitting}) =>{console.log(values) 
            setTimeout(() =>{
                setSubmitting(false);
            },10000)
        },

        validate:Validate
    })
    const [totalPrice, setTotalPrice] = useState(0)
    const [orderDate, setOrderDate] = useState(new Date())
    const navigate = useNavigate()

    const totalCalc = ()=>{
        var roomQty = 0
        let sum = 0;
    for(let i = 0; i < selectedMyFood.length; i++){
        const temp = foods.filter(food => food.id === selectedMyFood[i].id)
        roomQty = temp[0].qty
        console.log(temp)
        sum += (roomQty * selectedMyFood[i].price)
        } 
        setTotalPrice(sum)
    }

    const handleRezerv = () => {
        if(form.values.name !== '' & form.values.family !== '' & form.values.mobile !== '' & form.values.roomNumber !== ''){
            setCutomersFood({name: form.values.name, family: form.values.family, mobile: form.values.mobile, orderDate: orderDate.toString(), roomNumber: form.values.roomNumber})
            createUsersFoods({name: form.values.name, family: form.values.family, mobile: form.values.mobile, roomNumber: form.values.roomNumber, orderDate: orderDate.toString(), nationalCode: form.values.nationalCode, email: form.values.email, foodSelected: selectedMyFood})
            navigate('/displayorderinginfo')
        }else{
            alert('لطفا فیلد های اجباری را پر کنید.')
        }
    }


    useEffect(()=>{

        totalCalc()
        
    }, [foods]) 

    if(isLoading) {
        return<div>Loading...</div>        
    }

    return ( 
        <>
            <div className='mainRezervationInfo'>

                <div className='informationBox'>
                    <div>
                        <h2>اطلاعات شخص سفارش دهنده</h2>
                        <div className='peopleInfo' style={{height:'420px'}}>
                            <form onSubmit={form.handleSubmit}>
                                <div className='nameFamilyBox'>
                                    <div>
                                        <input type='text' name='name' placeholder='نام (اجباری)' value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                        {form.errors.name && form.touched.name && <span className='errorText'>{form.errors.name}</span>}
                                    </div>
                                    <div>
                                         <input type='text' name='family' placeholder=' نام خانوادگی (اجباری)' value={form.values.family} onChange={form.handleChange} onBlur={form.handleBlur}/> 
                                        {form.errors.family && form.touched.family && <span className='errorText'>{form.errors.family}</span>}
                                    </div>
                                </div>

                                <div className='mobileCodeBox'>
                                    <div>
                                        <input type='text' name='nationalCode' placeholder='کد ملی (اختیاری)' value={form.values.nationalCode} onChange={form.handleChange}/>
                                    </div>

                                    <div>
                                        <input type='text' name='mobile' placeholder='موبایل (اجباری)' value={form.values.mobile} onChange={form.handleChange} onBlur={form.handleBlur}/> 
                                        {form.errors.mobile && form.touched.mobile && <span className='errorText'>{form.errors.mobile}</span>}
                                    </div>
                                </div>
                                
                                <div>
                                     <input type='email' name='email' placeholder='ایمیل (اختیاری)' value={form.values.email} onChange={form.handleChange}/>
                                     <input type='text'  name='roomNumber' placeholder='شماره اتاق (اجباری)' value={form.values.roomNumber} onChange={form.handleChange}/>
                                     {form.errors.roomNumber && form.touched.roomNumber && <span className='errorTextSpan'>{form.errors.roomNumber}</span>}
                                </div>

                                <div className='orderDateBox'>
                                    <label style={{marginRight:'25px'}} for='orderDate'>تاریخ سفارش : </label>
                                    <DatePicker className='DatePicker' id='orderDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={orderDate} onChange={setOrderDate}/>   
                                </div>

                            </form> 
                            <div className='noticeBox'>
                                <p>لطفأ در واردکردن شماره موبایل دقت کنید، زیرا ما از این طریق سفارشتان را پیگیری خواهیم کرد</p>
                            </div>  
                        </div> 
                    
                        <div className='roomListBox'>
                            <h2>لیست غذاهای سفارش داده شده </h2>
                            {
                                selectedMyFood.map((food) =>(
                                    
                                   <>
                                         <div className='roomInfoBox'>
                                        <div className='nameBox'>
                                            <div className='nameRoom'>
                                                <h3>{food.name}</h3>
                                                <span>{food.category}</span>
                                            </div>
                                            <div className='infoBox'>
                                                <div>{food.food_contents}</div>
                                            </div>
                                        </div>
                                        <div className='checkBox'>
                                            <div className='imgBoxFood'>
                                                <img src={food.image} alt={food.name}/>
                                            </div>
                                            <div className='resturantBox'>(غذای سفارشی از  {food.resturant})</div>
                                        </div>
                                        
                                        <div style={{height:'37px'}} className='totalPriceBox'>
                                            <span>{foods.map(item => item.id === food.id && item.qty * food.price)} تومان</span>
                                        </div>
                                        
                                    </div>
                                   </>
                                    
                                ))
                            }
                            
                        </div> 
                        <div className='btnBox'>
                            <button onClick={()=>navigate('/foodsList')}><span className='sp1'>+</span> <span className='sp2'>افزودن غذای بیشتر</span></button>    
                        </div>  
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>

                <div className='rezervBox'>
                    <div>
                        <img src={img} alt='img'/>
                    </div>
                    <div className='datePriceBox'  style={{height:'50px'}}>
                        <div className='priceBox' style={{marginTop:'15px'}}>
                            <div>جمع کل</div>
                            <div>{totalPrice} تومان </div>
                        </div>
                    </div>
                    <div className='btnBox'>
                        <form onSubmit={form.handleSubmit}>
                            <button type='submit' onClick={handleRezerv} disabled={form.isSubmitting}>ثبت سفارش</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CustomerInfo;