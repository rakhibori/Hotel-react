import React, { useState } from 'react'
import DatePicker   from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import opacity from "react-element-popper/animations/opacity"
import { useGetRoomsQuery } from '../../../app/services/roomsApi';
import { useGetUsersRoomsQuery } from '../../../app/services/usersRoomsApi'
import { useRemoveUsersRoomsMutation } from '../../../app/services/usersRoomsApi';
import { useUpdateUsersRoomsMutation } from '../../../app/services/usersRoomsApi';
import { useCreateUsersRoomsMutation } from '../../../app/services/usersRoomsApi';
import { FaTrashCan, FaPenToSquare, FaUserPlus } from "react-icons/fa6";

const UserRoom = ({seletedUserRoomForEdite, setSeletedUserRoomForEdite}) => {
    const {data: rooms, isFetching} = useGetRoomsQuery()
    const {data: usersRooms, isLoading} = useGetUsersRoomsQuery();
    const [removeUsersRooms] = useRemoveUsersRoomsMutation();
    const [updateUsersRooms] = useUpdateUsersRoomsMutation();
    const [createUsersRooms] = useCreateUsersRoomsMutation();
    const [editeFlag, setEditeFlag] = useState(false)
    const [addFlag, setAddFlag] = useState(false)
    const [name, setName] = useState('')
    const [family, setFamily] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [idNumber, setIdnumber] = useState('')
    const [stayingTimeHotel, setStayingTimeHotel] = useState('')
    const [addEntryDate, setAddEntryDate] = useState('')
    const [updateEntryDate, setUpdateEntryDate] = useState('')
    const [addExitDate, setAddExitDate] = useState('')
    const [updateExitDate, setUpdateExitDate] = useState('')
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
        if(name !== '' & family !== '' & mobile !== '' & idNumber !== '' & stayingTimeHotel !== '' & roomNumber !== ''){
            const roomsSelected = rooms.filter(room => Number(room.id) === Number(roomNumber))
            updateUsersRooms({id: user.id, name: name, family: family, email:email, mobile: mobile, nationalCode: idNumber, stayingTimeHotel: Number(stayingTimeHotel), entryDate: updateEntryDate.toString(), exitDate: updateExitDate.toString(),  roomsSelected: roomsSelected}) 
            alert('رزرو شما با موفقیت ویرایش شد')
            setName('')
            setFamily('')
            setMobile('')
            setUpdateEntryDate('')
            setIdnumber('')
            setEmail('')
            setUpdateExitDate('')
            setStayingTimeHotel('')
            setRoomNumber('')
            setEditeFlag(false)    
        }else{
            alert('لطفا اطلاعات خواسته شده را وارد نمایید')
        }
        
    }

    const array = []
    const handleAddReserv = () => {
        if(name !== '' & family !== '' & mobile !== '' & idNumber !== '' & stayingTimeHotel !== '' & roomNumber !== '') {
            const roomsSelected = rooms.filter(room => Number(room.id) === Number(roomNumber)) 
            const temp = usersRooms.filter(room => Number(room.roomsSelected.map(item => item.id)) === Number(roomNumber))
            temp.map(room => !(((addEntryDate.toString() < room.entryDate & addExitDate.toString() <= room.entryDate) | addEntryDate.toString() >= room.exitDate)) && array.push("در این تاریخ امکان رزرو وجو ندارد"))
            if(array.length > 0){
                alert("در این تاریخ امکان رزرو وجو ندارد")
            }else{
                createUsersRooms({name: name, family: family, email:email, mobile: mobile, nationalCode: idNumber, stayingTimeHotel: Number(stayingTimeHotel), entryDate: addEntryDate.toString(), exitDate: addExitDate.toString(),  roomsSelected: roomsSelected}) 
                alert('کاربر جدید با موفقیت اضافه شد')
            }
            
            setName('')
            setFamily('')
            setMobile('')
            setAddEntryDate('')
            setIdnumber('')
            setEmail('')
            setAddExitDate('')
            setStayingTimeHotel('')
            setRoomNumber('')
            setAddFlag(false)    
        }else{
            alert('لطفا اطلاعات خواسته شده را وارد نمایید')
        }
    }

    return ( 
        <>
            <div className='addUserIconBox' onClick={()=>setAddFlag(true)}>
                <FaUserPlus title='اضافه' className='addUserIcon'></FaUserPlus>
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
                <DatePicker placeholder='تاریخ ورود' style={{borderRadius:'0', width:'247px'}} className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={updateEntryDate} onChange={setUpdateEntryDate}/>
                <DatePicker placeholder='تاریخ خروج' style={{borderRadius:'0', width:'247px'}} className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={updateExitDate} onChange={setUpdateExitDate}/>
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
                <DatePicker placeholder='تاریخ ورود' style={{borderRadius:'0', width:'247px'}} className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={addEntryDate} onChange={setAddEntryDate}/>
                <DatePicker placeholder='تاریخ خروج' style={{borderRadius:'0', width:'247px'}} className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={addExitDate} onChange={setAddExitDate}/>
                <input type='text' name='stayingTimeHotel' placeholder='مدت اقامت' value={stayingTimeHotel} onChange={(e)=>setStayingTimeHotel(e.target.value)}/>
                <input type='number' name='roomNumber' placeholder='شماره اتاق (1 تا 46)' value={roomNumber} onChange={(e)=>setRoomNumber(e.target.value)}/>
                <div className='editeFormReservBtnBox'>    
                    <button onClick={()=>handleAddReserv()}>اضافه کردن</button>               
                </div>
            </div>

            <div className='userRoomBox'>
                <div className='titleTable'>
                    <div className='numberBox'>ردیف</div>
                    <div className='bigBox'>نام و نام خانوادگی</div>
                    <div className='bigBox'>موبایل</div>
                    <div className='bigBox'>کد ملی</div>
                    <div className='emailRoomBox'>ایمیل</div>
                    <div className='dateBox'>تاریخ ورود</div>
                    <div className='dateBox'>تاریخ خروج</div>
                    <div className='smallBox'>تعداد اتاق</div>
                    <div className='roomNumberBox'>شماره اتاق</div>
                    <div className='nameRoomBox'>نام اتاق</div>
                    <div className='iconBoxUser'>#</div>
                </div>
                {
                    usersRooms.map(user => (
                        <div>
                        
                            <div className='answerTable'>
                                <div className='numberBox'>{usersRooms.indexOf(user) +1}</div>
                                <div className='bigBox'>{user.name} {user.family}</div>
                                <div className='bigBox'>{user.mobile}</div>
                                <div className='bigBox'>{user.nationalCode}</div>
                                <div className='emailRoomBox'>{user.email}</div>
                                <div className='dateBox'>{user.entryDate}</div>
                                <div className='dateBox'>{user.exitDate}</div>
                                <div className='smallBox'>{user.roomsSelected.length}</div>
                                <div className='roomNumberBox'>{user.roomsSelected.map(room => `(${room.id}) `)}</div>
                                <div className='nameRoomBox'>{user.roomsSelected.map(room => `(${room.name}) `)}</div>
                                <div className='iconBoxUser'>
                                    <FaTrashCan className='trashIcon' onClick={()=>handleRemoveUserRoom(user.id)} title='حذف'></FaTrashCan><FaPenToSquare onClick={()=>handleSelectedUser(user)} title='ویرایش'></FaPenToSquare>
                                </div>
                            </div>
                        </div>   
                    ))
                }  
            </div>
        </>
     );
}
 
export default UserRoom;