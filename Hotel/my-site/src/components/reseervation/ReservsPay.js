
import React, { useState, useEffect } from 'react'
import img from '../../image/brandimage/3.avif'
import { useGetRoomsQuery } from '../../app/services/roomsApi';

const ReservsPay = ({bookersRoom, selectedMyRoom, stayingTime, night, setNight}) => {
    const {data: rooms, isLoading} = useGetRoomsQuery();
    const [totalPrice, setTotalPrice] = useState(0)
    

    

    useEffect(() => {

        if(stayingTime === 'دو شب'){
            setNight(2)
        }
        if(stayingTime === 'سه شب'){
            setNight(3)
        }
        if(stayingTime === 'چهار شب'){
            setNight(4)
        }
        if(stayingTime === 'پنج شب'){
            setNight(5)
        }
        if(stayingTime === 'شش شب'){
            setNight(6)
        }
        if(stayingTime === 'هفت شب'){
            setNight(7)
        }
        if(stayingTime === 'هشت شب'){
            setNight(8)
        }
        if(stayingTime === 'نه شب'){
            setNight(9)
        }
        if(stayingTime === 'ده شب'){
            setNight(10)
        }
        if(stayingTime === 'یازده شب'){
            setNight(11)
        }
        if(stayingTime === 'دوازده شب'){
            setNight(12)
        }
        if(stayingTime === 'سیزده شب'){
            setNight(13)
        }
        if(stayingTime === 'چهارده شب'){
            setNight(14)
        }
        if(stayingTime === 'پانزده شب'){
            setNight(15)
        }
        if(stayingTime === 'شانزده شب'){
            setNight(16)
        }
        if(stayingTime === 'هفده شب'){
            setNight(17)
        }
        if(stayingTime === 'هجده شب'){
            setNight(18)
        }
        if(stayingTime === 'نوزده شب'){
            setNight(19)
        }
        if(stayingTime === 'بیست شب'){
            setNight(20)
        }


        totalCalc()
    }, [night])

    const totalCalc = ()=>{
        var roomQty = 0
        let sum = 0;
    for(let i = 0; i < selectedMyRoom.length; i++){
        const temp = rooms.filter(room => room.id === selectedMyRoom[i].id)
        roomQty = temp[0].qty
        console.log(temp)
        sum += (roomQty * selectedMyRoom[i].price * night)
        } 
        setTotalPrice(sum)
    }

    if(isLoading) {
        return<div>Loading...</div>        
    }

    return ( 
        <>
            <div className='displayRezervationInfoMainBox'>
                <div className='displayRezervationInfoTitleBox'>
                    <h4>اطلاعات رزرو</h4>
                </div>
                <div className='displayRezervationInfoBrandBox'>
                    <div><img src={img} alt='brandImg'></img></div>
                    <h2>Ariya</h2>
                </div>
                <div className='displayRezervationInfoPerson'>
                    <div className='displayRezervationInfoPersonHotelBox'>
                        <div className='hotelBox'>هتل</div>
                        <div className='hotelBox'>هتل آریا</div>
                    </div>
                    <div className='displayRezervationInfoPersonHotelBox'>
                        <div className='hotelBox'>تاریخ ورود</div>
                        <div className='hotelBox'>{bookersRoom.entryDate}</div>
                    </div>
                    <div className='displayRezervationInfoPersonHotelBox'>
                        <div className='hotelBox'>تاریخ خروج</div>
                        <div className='hotelBox'>{bookersRoom.entryDate}</div>
                    </div>
                    <div className='displayRezervationInfoPersonHotelBox'>
                        <div className='hotelBox'>به مدت</div>
                        <div className='hotelBox'>{bookersRoom.stayingTimeHotel}</div>
                    </div>
                    <div className='displayRezervationInfoPersonHotelBox'>
                        <div className='hotelBox'>نام و نام خانوادگی</div>
                        <div className='hotelBox'>{bookersRoom.name} {bookersRoom.family}</div>
                    </div>
                    <div className='displayRezervationInfoPersonHotelBox'>
                        <div className='hotelBox'>موبایل</div>
                        <div className='hotelBox'>{bookersRoom.mobile}</div>
                    </div>  
                </div>
                <div>
                    <div className='displayRezervationInfoMainTable'>
                        <div className='roomDiv'>نوع اتاق</div>
                        <div className='exteraPersonMainDiv'>
                            <div className='exteraPersonDiv'>نفر اضافه</div>
                            <div className='exteraPersonDivInfo'>
                                <div className='completeBox'>کامل</div>
                                <div>نیم بها</div>
                            </div>
                        </div>
                        <div className='personMainDiv'>
                            <div className='PersonDiv'>نفر</div>
                            <div className='ageBox'>
                                <div className='adultBox'>بزرگسال</div>
                                <div className='babyBox'>کودک</div>
                                <div>نوزاد</div>
                            </div>
                        </div>
                        <div className='halfChargMainDiv'>
                            <div className='halfChargDiv'>نیم شارژ</div>
                            <div className='stateBox'>
                                <div>ورود</div>
                                <div className='exitBox'>خروج</div>
                            </div>
                        </div>
                        
                        <div className='sumDiv'>جمع</div>
                    </div>
                    <div className='displayRezervationInfoMainRoom'>
                        {
                            selectedMyRoom.map(room => (
                                <div className='displayRezervationInfoRoom'>
                                    <div>
                                        <div className='roomDivBox'>{room.name}</div>
                                        <div className='spanRoomBox'><span>اتاق شماره {selectedMyRoom.indexOf(room) + 1}</span></div>
                                    </div>
                                    <div className='exteraPersonDivBox1'>{room.extera_person}</div>
                                    <div className='exteraPersonDivBox2'>0</div>
                                    <div className='adultBox'>{room.people}</div>
                                    <div className='childBox'>0</div>
                                    <div className='babyBox'>0</div>
                                    <div className='enterBox'>ندارد</div>
                                    <div className='exitBox'>ندارد</div>
                                    <div className='sumBox'>{room.price} تومان</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='displayRezervationInfoPrice'>
                        <div className='displayRezervationInfoPersonHotelBox'>
                            <div className='hotelBox'>جمع کل</div>
                            <div className='hotelBox' style={{color:'green'}}>{totalPrice}</div>
                        </div>
                        <div className='displayRezervationInfoPersonHotelBox'>
                            <div className='hotelBox'>کارمزد خدمات آنلاین</div>
                            <div className='hotelBox' style={{color:'green'}}>142250 تومان</div>
                        </div>
                        <div className='displayRezervationInfoPersonHotelBox'>
                            <div className='hotelBox'>قابل پرداخت</div>
                            <div className='hotelBox' style={{color:'green'}}>{totalPrice + 142250} تومان</div>
                        </div>
                    </div>
                    <div className='displayRezervationInBtnBox'>
                        <button>
                            <div>{totalPrice + 142250} تومان</div>
                            <div>پرداخت آنلاین و دریافت واچر</div>
                        </button>
                    </div>
                </div>
            </div>   
        </>
     );
}
 
export default ReservsPay;