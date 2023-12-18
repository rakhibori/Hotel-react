import React, { useState, useEffect } from 'react'
import { useGetUsersRoomsQuery } from '../../app/services/usersRoomsApi'
import { useRemoveUsersRoomsMutation } from '../../app/services/usersRoomsApi'
import { useUpdateUsersRoomsMutation } from '../../app/services/usersRoomsApi'
import { useGetRoomsQuery } from '../../app/services/roomsApi';

const ReservList = ({night, setNight}) => {
    const{data: usersRoom, isLoading} = useGetUsersRoomsQuery()
    const{data: rooms} = useGetRoomsQuery()
    const [removeUsersRooms] = useRemoveUsersRoomsMutation()
    const [updateUsersRooms] = useUpdateUsersRoomsMutation()
    const [nationalCode, setNationalCode] = useState('')
    const [name, setName] = useState('')
    const [family, setFamily] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [idNumber, setIdnumber] = useState('')
    const [entryDate, setEntryDate] = useState('')
    const [list, setList] = useState([])
    const [flag, setFlag] = useState(false)
    const [displayFlag, setDisplayFlag] = useState(false)

    useEffect(()=>{
        if(list.map(user => user.stayingTimeHotel) === 'دو شب'){
            setNight(2)
        }
        if(list.map(user => user.stayingTimeHotel) === 'سه شب'){
            setNight(3)
        }
        if(list.map(user => user.stayingTimeHotel) === 'چهار شب'){
            setNight(4)
        }
        if(list.map(user => user.stayingTimeHotel) === 'پنج شب'){
            setNight(5)
        }
        if(list.map(user => user.stayingTimeHotel) === 'شش شب'){
            setNight(6)
        }
        if(list.map(user => user.stayingTimeHotel) === 'هفت شب'){
            setNight(7)
        }
        if(list.map(user => user.stayingTimeHotel) === 'هشت شب'){
            setNight(8)
        }
        if(list.map(user => user.stayingTimeHotel) === 'نه شب'){
            setNight(9)
        }
        if(list.map(user => user.stayingTimeHotel) === 'ده شب'){
            setNight(10)
        }
        if(list.map(user => user.stayingTimeHotel) === 'یازده شب'){
            setNight(11)
        }
        if(list.map(user => user.stayingTimeHotel) === 'دوازده شب'){
            setNight(12)
        }
        if(list.map(user => user.stayingTimeHotel) === 'سیزده شب'){
            setNight(13)
        }
        if(list.map(user => user.stayingTimeHotel) === 'چهارده شب'){
            setNight(14)
        }
        if(list.map(user => user.stayingTimeHotel) === 'پانزده شب'){
            setNight(15)
        }
        if(list.map(user => user.stayingTimeHotel) === 'شانزده شب'){
            setNight(16)
        }
        if(list.map(user => user.stayingTimeHotel) === 'هفده شب'){
            setNight(17)
        }
        if(list.map(user => user.stayingTimeHotel) === 'هجده شب'){
            setNight(18)
        }
        if(list.map(user => user.stayingTimeHotel) === 'نوزده شب'){
            setNight(19)
        }
        if(list.map(user => user.stayingTimeHotel) === 'بیست شب'){
            setNight(20)
        }
        
    }, [night])

    if(isLoading) {
        return<div>Loading...</div>        
    }

    const handleSearchReservsList = () => {
        if(nationalCode !== ''){
            const temp = usersRoom.filter(user => user.nationalCode === nationalCode)
           setList(temp)
            setFlag(true)
            setNationalCode('')
        }
    }

    const handleRemoveReserv = (id) => {
        removeUsersRooms(id)
        setList([])
        alert('رزرو شما با موفقیت حذف شد')
    }

    const handleEditeReserv = (user) => {
        updateUsersRooms({id: user.id, name: name, family: family, mobile: mobile, nationalCode: idNumber, stayingTimeHotel: user.stayingTimeHotel, entryDate: entryDate, roomsSelected: user.roomsSelected}) 
        alert('رزرو شما با موفقیت ویرایش شد')
        setName('')
        setFamily('')
        setMobile('')
        setEntryDate('')
        setIdnumber('')
        setEmail('')
        setList([{id: user.id, name: name, family: family, mobile: mobile, nationalCode: idNumber, stayingTimeHotel: user.stayingTimeHotel, entryDate: entryDate, roomsSelected: user.roomsSelected}])
        setDisplayFlag(false)
    }

    return ( 
        <>
            <div className='reservsMainBox'>
                <div className='reservsSearchBox'>
                    <div>
                        <h3>برای نمایش لیست رزروهایتان لطفا کد ملی خود را وارد کرده سپس کلید جستجو را فشار دهید .</h3>
                    </div>
                    <input type='text' name='nationalCode' value={nationalCode} placeholder='کدملی' onChange={(e)=>setNationalCode(e.target.value)}/>
                    <button onClick={(handleSearchReservsList)}>جستجو</button>
                </div>

                <div className={flag ? 'displayblock' : 'displayNone'}>
                    <div className={list.length === 0 ? 'notFoundReservName' : 'displayNone'}>
                        <h3>رزروی با این کد ملی در سیستم ثبت نشده است</h3>
                    </div>

                    <div className={list.length > 0 ? 'reservsShowBox' : 'displayNone'}>
                        <div className='reservsShowTitleBox'>
                            <h4>لیست رزروها</h4>
                        </div>

                        <div>
                            <div className='btnReservListBox'>
                                <button onClick={()=>handleRemoveReserv(list.map(user => user.id))}>حذف رزرو</button>
                                <button onClick={()=>setDisplayFlag(true)}>ویرایش رزرو</button>
                            </div>
                            
                            <div className={displayFlag ? 'editeFormReserv' : 'displayNone'}>
                                <div>
                                    <h4>فرم ویرایش</h4>
                                </div>
                                <input type='text' name='name' placeholder='نام' value={name} onChange={(e)=>setName(e.target.value)}/>
                                <input type='text' name='family' placeholder='نام خانوادگی' value={family} onChange={(e)=>setFamily(e.target.value)}/>
                                <input type='text' name='mobile' placeholder='موبایل' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                                <input type='text' name='idNumber' placeholder='کد ملی' value={idNumber} onChange={(e)=>setIdnumber(e.target.value)}/>
                                <input type='text' name='email' placeholder='ایمیل' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <input type='date' name='entryDate' value={entryDate} onChange={(e)=>setEntryDate(e.target.value)}/>
                                <div className='editeFormReservBtnBox'>
                                    {list.map(user =>
                                        <button onClick={()=>handleEditeReserv(user)}>ویرایش</button>
                                        )}
                                    
                                </div>
                            </div>

                            <div className='nameBookerBox'>
                                <div>نام و نام خانوادگی رزرو کننده</div>
                                <div>{list.map(user => user.name)} {list.map(user => user.family)}</div>
                            </div>

                            <div>
                                {list.map(user => (
                                    user.roomsSelected.map(room => (
                                        <>
                                        <div className='roomBox'>
                                            <div className='nameBox'>
                                                <h4>{room.name}</h4>
                                                <p>تعداد اتاق : {rooms.map(item => item.id === room.id && item.qty)} عدد</p>
                                                <p style={{marginLeft:'15px'}}>قیمت کل : {rooms.map(item => item.id === room.id && item.qty * room.price * user.stayingTimeHotel)} تومان</p>
                                            </div>
                                            
                                            
                                            <div className='imgBox'>
                                                <img src={room.image} alt={room.name}/>
                                                <div className='priceBox'>
                                                    <p>برای {list.map(user => user.stayingTimeHotel)} شب</p>
                                                    <h5> {room.price * user.stayingTimeHotel} تومان</h5>
                                                </div>
                                            </div>
                                            <div className='exteraBox'>
                                            <div className='h5Box'>
                                                <h5> نوع سرویس اضافه : {room.additional_service}</h5>
                                            </div>
                                            <div className='peopleBox'>
                                                <div><p>تعداد : {room.people} نفر</p></div>
                                                <div><p>صبحانه : {room.breakfast}</p></div>
                                                <div><p>نفر اضافه : {room.extera_person} نفر</p></div>
                                            </div>
                                        </div>
                                </div>
                                        
                                        </>
                                        
                                    ))   
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ReservList;