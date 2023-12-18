import React, { useState } from 'react'
import DatePicker   from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import opacity from "react-element-popper/animations/opacity"
import { useGetFoodsQuery } from '../../../app/services/foodsApi';
import { useGetUsersFoodsQuery } from '../../../app/services/usersFoodsApi';
import { useRemoveUsersFoodsMutation } from '../../../app/services/usersFoodsApi';
import { useUpdateUsersFoodsMutation } from '../../../app/services/usersFoodsApi';
import { useCreateUsersFoodsMutation } from '../../../app/services/usersFoodsApi';
import { FaTrashCan, FaPenToSquare, FaUserPlus } from "react-icons/fa6";

const UserOrder = ({seletedUserFoodForEdite, setSeletedUserFoodForEdite}) => {
    const {data: usersFood, isLoading} = useGetUsersFoodsQuery();
    const {data: foods, isFetching} = useGetFoodsQuery();
    const [removeUsersFoods] = useRemoveUsersFoodsMutation();
    const [updateUsersFoods] = useUpdateUsersFoodsMutation();
    const [createUsersFoods] = useCreateUsersFoodsMutation();
    const [editeFlag, setEditeFlag] = useState(false)
    const [addFlag, setAddFlag] = useState(false)
    const [name, setName] = useState('')
    const [family, setFamily] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [idNumber, setIdnumber] = useState('')
    const [addOrderDate, setAddOrderDate] = useState('')
    const [updateOrderDate, setUpdateOrderDate] = useState('')
    const [roomNumber, setRoomNumber] = useState('')
    const [foodNumber, setFoodNumber] = useState('')
    const [mainCourse, setMainCourse] = useState('')
    const [starter, setStarter] = useState('')
    const [hotDrink, setHotDrink] = useState('')
    const [coldDrink, setColdDrink] = useState('')
    const [dessert, setDessert] = useState('')

    if(isLoading) {
        return<div>Loading...</div>        
    }

    if(isFetching) {
        return<div>Loading...</div>        
    }

    const handleRemoveUserFood = (id) => {
        removeUsersFoods(id)
        alert('سفارش شما با موفقیت حذف شد')
    }

    const handleSelectedUser = (user) => {
        console.log(user)
        setEditeFlag(true);
        setSeletedUserFoodForEdite(user)    
    }

    const handleEditeOrder = (user) => {
        const foodSelectedList = []
        if(name !== '' & family !== '' & mobile !== '' & idNumber !== '' & email !== '' & roomNumber !== ''){
            const starterFood = foods.find(food => food.name === starter)
            const mainCourseFood = foods.find(food => food.name === mainCourse)
            const hotDrinkFood = foods.find(food => food.name === hotDrink)
            const coldDrinkFood = foods.find(food => food.name === coldDrink)
            const dessertFood = foods.find(food => food.name === dessert)
            foodSelectedList.push(starterFood)
            foodSelectedList.push(mainCourseFood)
            foodSelectedList.push(hotDrinkFood)
            foodSelectedList.push(coldDrinkFood)
            foodSelectedList.push(dessertFood)
            updateUsersFoods({id: user.id, name: name, family: family, email:email, mobile: mobile, nationalCode: idNumber, orderDate: updateOrderDate.toString(), roomNumber:roomNumber, foodNumber:foodNumber, foodSelected: foodSelectedList}) 
            alert('سفارش شما با موفقیت ویرایش شد')
            setName('')
            setFamily('')
            setMobile('')
            setUpdateOrderDate('')
            setIdnumber('')
            setEmail('')
            setRoomNumber('')
            setFoodNumber('')
            setMainCourse('')
            setStarter('')
            setHotDrink('')
            setColdDrink('')
            setDessert('')
            setEditeFlag(false)    
        }else(
            alert('لطفا اطلاعات خواسته شده را وارد نمایید')
        ) 
    }

    const handleAddReserv = () =>{
        const foodSelectedList = []
        if(name !== '' & family !== '' & mobile !== '' & idNumber !== '' & email !== '' & roomNumber !== ''){
            const starterFood = foods.find(food => food.name === starter)
            const mainCourseFood = foods.find(food => food.name === mainCourse)
            const hotDrinkFood = foods.find(food => food.name === hotDrink)
            const coldDrinkFood = foods.find(food => food.name === coldDrink)
            const dessertFood = foods.find(food => food.name === dessert)
            foodSelectedList.push(starterFood)
            foodSelectedList.push(mainCourseFood)
            foodSelectedList.push(hotDrinkFood)
            foodSelectedList.push(coldDrinkFood)
            foodSelectedList.push(dessertFood)
            createUsersFoods({name: name, family: family, email:email, mobile: mobile, nationalCode: idNumber, orderDate: addOrderDate.toString(), roomNumber:roomNumber, foodNumber:foodNumber, foodSelected: foodSelectedList}) 
            alert('کاربر با موفقیت اضافه شد')
            setName('')
            setFamily('')
            setMobile('')
            setAddOrderDate('')
            setIdnumber('')
            setEmail('')
            setRoomNumber('')
            setFoodNumber('')
            setMainCourse('')
            setStarter('')
            setHotDrink('')
            setColdDrink('')
            setDessert('')
            setAddFlag(false)     
        }else(
            alert('لطفا اطلاعات خواسته شده را وارد نمایید')
        ) 
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
                <DatePicker placeholder='تاریخ سفارش' style={{borderRadius:'0', width:'247px'}} className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={updateOrderDate} onChange={setUpdateOrderDate}/>
                <input type='number' name='roomNumber' placeholder='شماره اتاق' value={roomNumber} onChange={(e)=>setRoomNumber(e.target.value)}/>
                <select name='mainCourse' value={mainCourse} onChange={(e)=>setMainCourse(e.target.value)}>
                    <option>غذای اصلی</option>
                    {
                        foods.map(food => food.category === 'غذای اصلی' && <> <option className='option'>{food.name}</option></> )
                    }
                </select>
                <select name='starter' value={starter} onChange={(e)=>setStarter(e.target.value)}>
                    <option>پیش غذا</option>
                    {
                        foods.map(food => food.category === 'پیش غذا' && <> <option>{food.name}</option></> )
                    }
                </select>
                <select name='hotDrink' value={hotDrink} onChange={(e)=>setHotDrink(e.target.value)}>
                    <option>چای و قهوه</option>
                    {
                        foods.map(food => food.category === 'چای و قهوه' && <> <option>{food.name}</option></> )
                    }
                </select>
                <select name='coldDrink' value={coldDrink} onChange={(e)=>setColdDrink(e.target.value)}>
                    <option>نوشیدنی های سرد</option>
                    {
                        foods.map(food => food.category === "نوشیدنی های سرد" && <> <option>{food.name}</option></> )
                    }
                </select>
                <select name='dessert' value={dessert} onChange={(e)=>setDessert(e.target.value)}>
                    <option>دسر</option>
                    {
                        foods.map(food => food.category === "دسرها" && <> <option>{food.name}</option></> )
                    }
                </select>
                <div className='editeFormReservBtnBox'>    
                    <button onClick={()=>handleEditeOrder(seletedUserFoodForEdite)}>ویرایش</button>               
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
                <DatePicker placeholder='تاریخ سفارش' style={{borderRadius:'0', width:'247px'}} className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={addOrderDate} onChange={setAddOrderDate}/>
                <input type='number' name='roomNumber' placeholder='شماره اتاق' value={roomNumber} onChange={(e)=>setRoomNumber(e.target.value)}/>
                <select name='mainCourse' value={mainCourse} onChange={(e)=>setMainCourse(e.target.value)}>
                    <option>غذای اصلی</option>
                    {
                        foods.map(food => food.category === 'غذای اصلی' && <> <option className='option'>{food.name}</option></> )
                    }
                </select>
                <select name='starter' value={starter} onChange={(e)=>setStarter(e.target.value)}>
                    <option>پیش غذا</option>
                    {
                        foods.map(food => food.category === 'پیش غذا' && <> <option>{food.name}</option></> )
                    }
                </select>
                <select name='hotDrink' value={hotDrink} onChange={(e)=>setHotDrink(e.target.value)}>
                    <option>چای و قهوه</option>
                    {
                        foods.map(food => food.category === 'چای و قهوه' && <> <option>{food.name}</option></> )
                    }
                </select>
                <select name='coldDrink' value={coldDrink} onChange={(e)=>setColdDrink(e.target.value)}>
                    <option>نوشیدنی های سرد</option>
                    {
                        foods.map(food => food.category === "نوشیدنی های سرد" && <> <option>{food.name}</option></> )
                    }
                </select>
                <select name='dessert' value={dessert} onChange={(e)=>setDessert(e.target.value)}>
                    <option>دسر</option>
                    {
                        foods.map(food => food.category === "دسرها" && <> <option>{food.name}</option></> )
                    }
                </select>
                <div className='editeFormReservBtnBox'>    
                    <button onClick={()=>handleAddReserv()}>اضافه کردن</button>               
                </div>
            </div>

            <div className='userFoodBox'>
                <div className='titleTable'>
                    <div className='numberBox'>ردیف</div>
                    <div className='bigBox'>نام و نام خانوادگی</div>
                    <div className='bigBox'>موبایل</div>
                    <div className='bigBox'>کد ملی</div>
                    <div className='emailRoomBox'>ایمیل</div>
                    <div className='bigBox'>تاریخ سفارش</div>
                    <div className='roomNumberBox'>تعداد سفارش</div>
                    <div className='roomNumberBox'>شماره فاکتور</div>
                    <div className='roomNumberBox'>شماره اتاق</div>
                    <div className='nameRoomBox'>نام سفارش</div>
                    <div className='iconBoxUser'>#</div>
                </div>
                {
                    usersFood.map(user => (
                        <div>
                        
                            <div className='answerTable'>
                                <div className='numberBox'>{usersFood.indexOf(user) +1}</div>
                                <div className='bigBox'>{user.name} {user.family}</div>
                                <div className='bigBox'>{user.mobile}</div>
                                <div className='bigBox'>{user.nationalCode}</div>
                                <div className='emailRoomBox'>{user.email}</div>
                                <div className='bigBox'>{user.orderDate}</div>
                                <div className='roomNumberBox'>{user.foodSelected.length} عدد</div>
                                <div className='roomNumberBox'>0000{user.id}</div>
                                <div className='roomNumberBox'>{user.roomNumber}</div>
                                <div className='nameRoomBox'>{user.foodSelected.map(food => `(${food.name}) `)}</div>
                                <div className='iconBoxUser'>
                                    <FaTrashCan className='trashIcon' title='حذف' onClick={()=>handleRemoveUserFood(user.id)}></FaTrashCan><FaPenToSquare onClick={()=>handleSelectedUser(user)} title='ویرایش'></FaPenToSquare>
                                </div>
                            </div>
                        </div>   
                    ))
                }  
            </div>
        </>
     );
}
 
export default UserOrder;