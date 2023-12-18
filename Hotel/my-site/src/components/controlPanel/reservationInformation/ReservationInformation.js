import React, { useState} from 'react'
import { useGetRoomsQuery } from '../../../app/services/roomsApi';
import { useGetUsersRoomsQuery } from '../../../app/services/usersRoomsApi';
import { useCreateUsersRoomsMutation } from '../../../app/services/usersRoomsApi';
import { useUpdateUsersRoomsMutation } from '../../../app/services/usersRoomsApi';
import { useRemoveUsersRoomsMutation } from '../../../app/services/usersRoomsApi';
import DatePicker   from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import opacity from "react-element-popper/animations/opacity"
import { FaTrashCan, FaPenToSquare, FaUserPlus } from "react-icons/fa6";

const RezervationInformation = ({seletedUserRoomForEdite, setSeletedUserRoomForEdite, night, setNight}) => {
    const {data: rooms, isFetching} = useGetRoomsQuery()
    const {data: userRooms, isLoading} = useGetUsersRoomsQuery();
    const [createUsersRooms] = useCreateUsersRoomsMutation();
    const [updateUsersRooms] = useUpdateUsersRoomsMutation();
    const [removeUsersRooms] = useRemoveUsersRoomsMutation();
    const [editeFlag, setEditeFlag] = useState(false)
    const [addFlag, setAddFlag] = useState(false)
    const [name, setName] = useState('')
    const [family, setFamily] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [idNumber, setIdnumber] = useState('')
    const [entryDate, setEntryDate] = useState('')
    const [stayingTimeHotel, setStayingTimeHotel] = useState('')
    const [exitDate, setExitDate] = useState('')
    const [roomNumber, setRoomNumber] = useState('')

    
    

    if(isLoading) {
        return<div>Loading...</div>        
    }

    if(isFetching) {
        return<div>Loading...</div>        
    }

    const handleRemoveUserRoom = (id) => {
        removeUsersRooms(id)
        alert('رزرو شما با موفقیت حذف شد')
    }

    const handleSelectedUser = (user) => {
        console.log(user)
        setEditeFlag(true);
        setSeletedUserRoomForEdite(user)    
    }

    const handleEditeReserv = (user) => {
        if(name !== '' & family !== '' & mobile !== '' & idNumber !== '' & entryDate !== '' & email !== '' & exitDate !== '' & stayingTimeHotel !== '' & roomNumber !== ''){
            const roomsSelected = rooms.filter(room => Number(room.id) === Number(roomNumber))
            updateUsersRooms({id: user.id, name: name, family: family, email:email, mobile: mobile, nationalCode: idNumber, stayingTimeHotel: Number(stayingTimeHotel), entryDate: entryDate.toString(), exitDate: exitDate.toString(),  roomsSelected: roomsSelected}) 
            alert('رزرو شما با موفقیت ویرایش شد')
            setName('')
            setFamily('')
            setMobile('')
            setEntryDate('')
            setIdnumber('')
            setEmail('')
            setExitDate('')
            setStayingTimeHotel('')
            setRoomNumber('')
            setEditeFlag(false)    
        }else{
            alert('لطفا اطلاعات خواسته شده را وارد نمایید')
        }   
    }

    const handleAddReserv = () => {
        if(name !== '' & family !== '' & mobile !== '' & idNumber !== '' & entryDate !== '' & email !== '' & exitDate !== '' & stayingTimeHotel !== '' & roomNumber !== '') {
            const roomsSelected = rooms.filter(room => Number(room.id) === Number(roomNumber))
            createUsersRooms({name: name, family: family, email:email, mobile: mobile, nationalCode: idNumber, stayingTimeHotel: Number(stayingTimeHotel), entryDate: entryDate.toString(), exitDate: exitDate.toString(),  roomsSelected: roomsSelected}) 
            alert('کاربر جدید با موفقیت اضافه شد')
            setName('')
            setFamily('')
            setMobile('')
            setEntryDate('')
            setIdnumber('')
            setEmail('')
            setExitDate('')
            setStayingTimeHotel('')
            setRoomNumber('')
            setAddFlag(false)    
        }else{
            alert('لطفا اطلاعات خواسته شده را وارد نمایید')
        }
    }

    return ( 
        <>
            <div className='rezervationInformationMainBox'>
                <div className='rezervationInformationTitleBox'>
                    <h2>اطلاعات رزرواسیون</h2>
                    <div className='addUserIconBox' onClick={()=>setAddFlag(true)}>
                        <FaUserPlus title='اضافه' className='addUserIcon'></FaUserPlus>
                    </div>
                </div>

                <div className={editeFlag ? 'editeFormReserv' : 'displayNone'}>
                    <div>
                        <h4>فرم ویرایش</h4>
                    </div>
                    <input type='text' name='name' placeholder='نام' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type='text' name='family' placeholder='نام خانوادگی' value={family} onChange={(e)=>setFamily(e.target.value)}/>
                    <input type='text' name='mobile' placeholder='موبایل' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                    <input type='text' name='idNumber' placeholder='کد ملی' value={idNumber} onChange={(e)=>setIdnumber(e.target.value)}/>
                    <input type='text' name='email' placeholder='ایمیل' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <DatePicker placeholder='تاریخ ورود' style={{borderRadius:'0', width:'247px'}} className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={entryDate} onChange={setEntryDate}/>
                <DatePicker placeholder='تاریخ خروج' style={{borderRadius:'0', width:'247px'}} className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={exitDate} onChange={setExitDate}/>
                    <input type='text' name='stayingTimeHotel' placeholder='مدت اقامت' value={stayingTimeHotel} onChange={(e)=>setStayingTimeHotel(e.target.value)}/>
                    <input type='number' name='roomNumber' placeholder='شماره اتاق (1 تا 46)' value={roomNumber} onChange={(e)=>setRoomNumber(e.target.value)}/>
                    <div className='editeFormReservBtnBox'>    
                        <button onClick={()=>handleEditeReserv(seletedUserRoomForEdite)}>ویرایش</button>               
                    </div>
                </div>

                <div className={addFlag ? 'editeFormReserv' : 'displayNone'}>
                    <div>
                        <h4>فرم اضافه کردن کاربر </h4>
                    </div>
                    <input type='text' name='name' placeholder='نام' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type='text' name='family' placeholder='نام خانوادگی' value={family} onChange={(e)=>setFamily(e.target.value)}/>
                    <input type='text' name='mobile' placeholder='موبایل' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                    <input type='text' name='idNumber' placeholder='کد ملی' value={idNumber} onChange={(e)=>setIdnumber(e.target.value)}/>
                    <input type='text' name='email' placeholder='ایمیل' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <DatePicker placeholder='تاریخ ورود' style={{borderRadius:'0', width:'247px'}} className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={entryDate} onChange={setEntryDate}/>
                <DatePicker placeholder='تاریخ خروج' style={{borderRadius:'0', width:'247px'}} className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={exitDate} onChange={setExitDate}/>
                    <input type='text' name='stayingTimeHotel' placeholder='مدت اقامت' value={stayingTimeHotel} onChange={(e)=>setStayingTimeHotel(e.target.value)}/>
                    <input type='number' name='roomNumber' placeholder='شماره اتاق (1 تا 46)' value={roomNumber} onChange={(e)=>setRoomNumber(e.target.value)}/>
                    <div className='editeFormReservBtnBox'>    
                        <button onClick={()=>handleAddReserv()}>اضافه کردن</button>               
                    </div>
                </div>

                {
                    userRooms.map(user => (
                        <>
                            <div className='rezervationInformationPersonBox'>
                                <div className='rezervationInformationPersontitleBox'>
                                    <h4>{userRooms.indexOf(user) +1} - اطلاعات شخص رزرو کننده</h4>
                                    <div className='iconBoxUser'>
                                        <FaTrashCan className='trashIcon' title='حذف' onClick={()=>handleRemoveUserRoom(user.id)}></FaTrashCan><FaPenToSquare  title='ویرایش' onClick={()=>handleSelectedUser(user)}></FaPenToSquare>
                                    </div>
                                </div>
                                <div className='personInfoMainBox'>
                                    <div className='personInfoBox'>
                                        <div>نام و نام خانوادگی</div>
                                        <div>{user.name} {user.family}</div>
                                    </div>
                                    <div className='personInfoBox'>
                                        <div>موبایل</div>
                                        <div>{user.mobile}</div>
                                    </div>
                                    <div className='personInfoBox'>
                                        <div>کد ملی</div>
                                        <div>{user.nationalCode}</div>
                                    </div>
                                    <div className='personInfoBox'>
                                        <div>ایمیل</div>
                                        <div>{user.email}</div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className='rezervationInformationRoomtitleBox'>
                                        <h4>اطلاعات اتاق رزرو شده</h4>
                                    </div>
                                    {
                                        user.roomsSelected.map( room =>
                                            <div className='personInfoMainBox'>
                                                <div className='personInfoBox'>
                                                    <div className='roomNumberBox'>اتاق شماره {user.roomsSelected.indexOf(room) + 1}</div>
                                                </div>
                                                <div className='personInfoBox'>
                                                    <div>نام اتاق</div>
                                                    <div>{room.name}</div>
                                                </div>
                                                <div className='personInfoBox'>
                                                    <div>قیمت اتاق</div>
                                                    <div>{room.price} تومان</div>
                                                </div>
                                                <div className='personInfoBox'>
                                                    <div>شماره اتاق</div>
                                                    <div>{room.id}</div>
                                                </div>
                                                <div className='personInfoBox'>
                                                    <div>تعداد</div>
                                                    <div>{rooms.map(item => item.id === room.id && item.qty )} عدد</div>
                                                </div>
                                                <div className='personInfoBox'>
                                                    <div>مدت اقامت</div>
                                                    <div>{user.stayingTimeHotel} شب</div>
                                                </div>
                                                <div className='personInfoBox'>
                                                    <div>تاریخ ورود</div>
                                                    <div>{user.entryDate}</div>
                                                </div>
                                                <div className='personInfoBox'>
                                                    <div>تاریخ خروج</div>
                                                    <div>{user.exitDate}</div>
                                                </div>
                                                <div className='personInfoBox'>
                                                    <div className='roomNumberBox'>جمع کل صورت حساب : {rooms.map(item => item.id === room.id && item.qty * room.price * user.stayingTimeHotel)} تومان</div>
                                                </div>
                                            </div>
                                        )    
                                    }
                                </div>
                                 
                            </div>
                        </>
                    ))
                }
                
                

            </div>
        </>
     );
}
 
export default RezervationInformation;