
import React from 'react';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';
import RoyalFamilyRoomSlider from './RoyalFamilyRoomSlider';
import { Navigate, useNavigate } from 'react-router-dom';

const RoyalFamilyRoom = ({rooms}) => {
    const room = rooms.filter(room => room.name === "اتاق خانوادگی رویال")
    const navigate = useNavigate()
    return ( 
        <>
            <Header/>

            {
                room.map(item=>(
                    <div className='standardDoubleRoomBox'>
                        <div className='nameRoomBox'>
                            <h2>
                                {item.name}
                            </h2>
                        </div>
                        <div className='roomInfoBoxTitle'>
                            <div className='div1Box'></div>
                            <div className='h3Box'>
                                <h3>مشخصات اتاق</h3>
                            </div>
                            <div className='div2Box'></div>
                        </div>
                        <div className='sliderMainBox'>
                            <div className='Propertybox'>
                                <h2>ویژگی اتاق های هتل</h2>
                                <p>هتل آریا با احترام به کسانی که این هتل را برای اقامت انتخاب می کنند، تمامی امکانات و سرویس های رفاهی یک هتل پنج ستاره ی لوکس را دارا می باشد. علاوه بر این، جذابیت های گیرای دکوراسیون خاص آن همراه با فضای صمیمی و راحتی که موجبات آرامش و آسایش را فراهم می آورد، از دیگر عواملی است که این هتل را محبوبترین هتل تهران ساخته است. </p>
                            </div>
                            <div className='sliderRoomsBox'>
                                <RoyalFamilyRoomSlider/>
                            </div>
                        </div>
                        <div className='btnRezervBox'>
                            <div>
                                <p>برای اقامت در یک هتل لوکس برنامه ریزی کنید</p>
                            </div>
                            <div>
                                <button onClick={()=>navigate('/royalfamilyroomsearch')}>همین الان رزرو کنید</button>
                            </div>
                        </div>
                        <div className='descriptionRoomBox'>
                            <p>{item.description}</p>
                            <p>این اتاق ها ویژگی های زیر را دارا می باشند: </p>
                        </div>
                        <div className='possibilitiesRoomBox'>
                            <ul>
                                {
                                    item.possibilities.map(it=>(
                                        <li>{it}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }  
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>  
        </>
     );
}
 
export default RoyalFamilyRoom;