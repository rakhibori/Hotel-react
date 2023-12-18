import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa6";
import {useFormik} from 'formik'
import { Validate } from './Validate';
import img from '../../../image/ariya/2.jpg';
import { useGetSampleRoomsQuery } from '../../../app/services/roomsApi';
import { useCreateUsersRoomsMutation } from '../../../app/services/usersRoomsApi';

const RezervationInfo = ({selectedMyRoom, entryDate, exitDate, stayingTime, setBookersRoom, setFlagDisplay}) => {
    const {data: rooms, isLoading} = useGetSampleRoomsQuery();
    const [createUsersRooms] = useCreateUsersRoomsMutation();
    const form = useFormik({
        initialValues:{name:'', family:'', mobile:'', nationalCode:'', email:'', exitDate:'',  guestName: '', guestFamily: '' },
        onSubmit:(values, {setSubmitting}) =>{console.log(values) 
            setTimeout(() =>{
                setSubmitting(false);
            },10000)
        },

        validate:Validate
    })
    const [totalPrice, setTotalPrice] = useState(0)
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate()

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

    const handleRezerv = () => {
        if(form.values.name !== '' & form.values.family !== '' & form.values.mobile !== ''){
            setBookersRoom({name: form.values.name, family: form.values.family, mobile: form.values.mobile, entryDate: entryDate, exitDate: exitDate, stayingTimeHotel:stayingTime})
            createUsersRooms({name: form.values.name, family: form.values.family, mobile: form.values.mobile, nationalCode: form.values.nationalCode, email: form.values.email, stayingTimeHotel: stayingTime, entryDate: entryDate, exitDate: exitDate, roomsSelected: selectedMyRoom})
            setFlagDisplay(true)
        }else{
            alert('لطفا فیلد های اجباری را پر کنید.')
        }
    }


    useEffect(()=>{
        totalCalc()
    }, [rooms, stayingTime]) 

    if(isLoading) {
        return<div>Loading...</div>        
    }

    return ( 
        <>
            <div className='mainRezervationInfo'>

                <div className='informationBox'>
                    <div>
                        <h2>اطلاعات شخص رزرو کننده</h2>
                        <div className='peopleInfo'>
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
                                
                                <div style={{display:'flex'}}>
                                    <div>
                                        <input type='email' name='email' placeholder='ایمیل (اختیاری)' value={form.values.email} onChange={form.handleChange}/>
                                    </div>
                                </div>
                            </form> 
                            <div className='noticeBox'>
                                <p>لطفأ در واردکردن شماره موبایل دقت کنید، زیرا ما از این طریق رزروتان را پیگیری خواهیم کرد</p>
                            </div>  
                        </div> 
                        <div className='ageRulsBox'>
                            <h2>توضیحات لازم در انتخاب رده سنی</h2>
                            <div className='ageBox'>
                                <p>بزرگسال : بالای 4 سال</p>
                                <p>کودک : -</p>
                                <p>نوزاد : زیر 2 سال</p>
                            </div>
                        </div>
                        <div className='roomListBox'>
                            <h2>لیست اتاق ها <span>(مشخص کردن نفرات هر اتاق)</span></h2>
                            {
                                selectedMyRoom.map((room) =>(
                                    
                                   <>
                                         <div className='roomInfoBox'>
                                        <div className='nameBox'>
                                            <div className='nameRoom'>
                                                <h3>{room.name}</h3>
                                                <span>اتاق شماره {selectedMyRoom.indexOf(room) + 1}</span>
                                            </div>
                                            <div className='infoBox'>
                                                <div className='peopleBox'>تعداد نفر : {room.people}</div>
                                                <div className='breakBox'>صبحانه : {room.breakfast}</div>
                                                <div>نفر اضافه : {room.extera_person}</div>
                                            </div>
                                        </div>
                                        <div className='checkBox'>
                                            <div>
                                                <label className='lab1' for="select1">بزرگسال</label><select id='select1'>
                                                    <option selected>{room.people}</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <label className='lab2' for="select2">کودک</label><select id='select2'>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <label className='lab3' for="selec3">نوزاد</label><select id='select3'>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                
                                            </div>
                                            <div className='radioBox'>
                                                <p>آیا مسافری با تابعیت خارجی در این اتاق اقامت خواهد داشت؟</p>
                                                <input type='radio' className='radio' name={`radio${room.id}`}/>بله
                                                <input type='radio' className='radio' name={`radio${room.id}`} checked/>خیر
                                            </div>
                                        </div>
                                        <div className='chargeBox'>
                                            <div className='guestBox'>
                                                <div>
                                                    <input type='text' name='name' id='name' placeholder='نام میهمان اصلی (اجباری)' value={form.values.guestName} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                                    <div className='spanBox'>
                                                        {form.errors.name && form.touched.name && <span className='errorText'>{form.errors.name}</span>}
                                                    </div>
                                                </div>

                                                <div>
                                                    <input type='text' name='family' placeholder='نام خانوادگی (اجباری)' value={form.values.guestFamily} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                                    <div className='spanBox'>
                                                        {form.errors.family && form.touched.family && <span className='errorText'>{form.errors.family}</span>}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <input type='checkbox' id='charge' className='charge'/><label for='charge'>نیم شارژ خروج</label>
                                            
                                        </div>
                                        <div className='totalPriceBox'>
                                            <span>{rooms.map(item => item.id === room.id && item.qty * room.price * Number(stayingTime))} تومان</span>
                                        </div>
                                        
                                    </div>
                                   </>
                                    
                                ))
                            }
                            
                        </div> 
                        <div className='btnBox'>
                            <button onClick={()=>navigate('/roomsList')}><span className='sp1'>+</span> <span className='sp2'>افزودن اتاق بیشتر</span></button>    
                        </div>  
                        <div className='textBox'>
                            <textarea placeholder='اگر درخواستی از هتل دارید اینجا بنویسید(انحام شدن درخواست به شرایط هتل بستگی دارد)'></textarea>
                        </div> 
                        <div onClick={()=>setFlag(!flag)} className={flag ? 'rulsBoxObvious' : 'rulsBoxHide'}>
                            <h4><FaChevronLeft className='icon'></FaChevronLeft>قوانین و شرایط رزرو</h4>
                            <div className='rulsText'>
                                <div className='par1'>
                                    <p>کلیه نرخ ها برای میهمانان شامل اتاق ، صبحانه ، مالیات ،  استفاده از مجموعه ورزشی ، پارکینگ و اینترنت می باشد .</p>
                                    <p>شرایط ابطال رزرو :</p>
                                    <p>الف) رزرو های انفرادی (5-1 اتاق ) :</p>
                                    <p>48 ساعت قبل از ورود و عدم مراجعه میهمانان 100% نرخ دریافت می گردد .</p>
                                    <p>ب) رزروهای گروهی (5 اتاق به بالا) :</p>
                                    <p>یک هفته قبل از ورود و عدم مراجعه میهمانان 100% نرخ دریافت می گردد .</p>
                                    <p>ساعت ورود مهمانان 15:00 و ساعت خروج 11:00 میباشد .</p>
                                    <p>چنانچه ورود میهمانان بین ساعات 11 نیمه شب تا 7 صبح باشد مبلغ اتاق از شب قبل محاسبه می گردد.</p>
                                    <p>نیم شارژ ورود از ساعت  07:00  صبح آغاز میشود و نیم شارژ خروج تا ساعت 19:00 ادامه خواهد داشت .</p>
                                    <p>به کودکان بالای 3 سال شارژ کامل تعلق می گیرد .</p>
                                </div>
                                <div>
                                    <h4>مدارک لازم جهت پذیرش مهمان:</h4>
                                    <p>ملاک شناسایی افراد کارت ملی و شناسنامه و ملاک احراز زوجیت ، شناسنامه زوجین و یا عقدنامه محضری عکس دار با مهر برجسته  می باشد در غیر اینصورت  مطابق قانون کنسلی عمل می گردد.</p>
                                    <p>از پذیرش افراد کمتر از ۱۸ سال تنها معذوریم</p>
                                </div>
                            </div>
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
                    <div className='datePriceBox'>
                        <div className='dateBox'>
                            <div className='enterDate'><span>تاریخ ورود</span>{entryDate}</div>
                            <div className='exitData'><span>تاریخ خروج</span>{exitDate}</div>
                        </div>
                        <div className='priceBox'>
                            <div>جمع کل</div>
                            <div>{totalPrice} تومان</div>
                        </div>
                    </div>
                    <div className='btnBox'>
                        <form onSubmit={form.handleSubmit}>
                            <button type='submit' onClick={handleRezerv} disabled={form.isSubmitting}>ثبت رزرو</button>
                        </form>
                        
                        <div>
                            <p>زدن دکمه به معنی تایید شرایط و قوانین رزرو می باشد</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default RezervationInfo;