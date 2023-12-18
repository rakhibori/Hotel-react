import React, { useState} from 'react'
import { useGetUsersFoodsQuery } from '../../app/services/usersFoodsApi'
import { useRemoveUsersFoodsMutation } from '../../app/services/usersFoodsApi'
import { useUpdateUsersFoodsMutation } from '../../app/services/usersFoodsApi'
import { useGetFoodsQuery } from '../../app/services/foodsApi';

const OrdersList = () => {
    const{data: usersFood, isLoading} = useGetUsersFoodsQuery()
    const{data: foods} = useGetFoodsQuery()
    const [removeUsersFoods] = useRemoveUsersFoodsMutation()
    const [updateUsersFoods] = useUpdateUsersFoodsMutation()
    const [nationalCode, setNationalCode] = useState('')
    const [name, setName] = useState('')
    const [family, setFamily] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [idNumber, setIdnumber] = useState('')
    const [orderDate, setOrderDate] = useState('')
    const [list, setList] = useState([])
    const [flag, setFlag] = useState(false)
    const [displayFlag, setDisplayFlag] = useState(false)

    

    if(isLoading) {
        return<div>Loading...</div>        
    }

    const handleSearchReservsList = () => {
        if(nationalCode !== ''){
            const temp = usersFood.filter(user => user.nationalCode === nationalCode)
            setList(temp)
            setFlag(true)
            setNationalCode('')
        }
        else{alert('لطفا ابتدا کد ملی خود را وارد کرده سپس کلید جستجو را فشار دهید')}
    }

    const handleRemoveReserv = (id) => {
        removeUsersFoods(id)
        setList([])
        alert('سفارش شما با موفقیت حذف شد')
    }

    const handleEditeReserv = (user) => {
        updateUsersFoods({id: user.id, name: name, family: family, mobile: mobile, nationalCode: idNumber,  orderDate: orderDate, roomNumber: user.roomNumber, foodSelected: user.foodSelected}) 
        alert('سفارش شما با موفقیت ویرایش شد')
        setName('')
        setFamily('')
        setMobile('')
        setOrderDate('')
        setIdnumber('')
        setEmail('')
        setList([{id: user.id, name: name, family: family, mobile: mobile, nationalCode: idNumber, orderDate: orderDate, roomNumber: user.roomNumber, foodSelected: user.foodSelected}])
        setDisplayFlag(false)
    }

    return ( 
        <>
            <div className='reservsMainBox'>
                <div className='reservsSearchBox'>
                    <div>
                        <h3>برای نمایش لیست سفارشتان لطفا کد ملی خود را وارد کرده سپس کلید جستجو را فشار دهید .</h3>
                    </div>
                    <input type='text' name='nationalCode' value={nationalCode} placeholder='کدملی' onChange={(e)=>setNationalCode(e.target.value)}/>
                    <button onClick={(handleSearchReservsList)}>جستجو</button>
                </div>

                <div className={flag ? 'displayblock' : 'displayNone'}>
                    <div className={list.length === 0 ? 'notFoundReservName' : 'displayNone'}>
                        <h3>سفارشی با این کد ملی در سیستم ثبت نشده است</h3>
                    </div>

                    <div className={list.length > 0 ? 'reservsShowBox' : 'displayNone'}>
                        <div className='reservsShowTitleBox'>
                            <h4>لیست سفارشات</h4>
                        </div>

                        <div>
                            <div className='btnReservListBox'>
                                <button onClick={()=>handleRemoveReserv(list.map(user => user.id))} style={{width:'100px'}}>حذف سفارش</button>
                                <button onClick={()=>setDisplayFlag(true)} style={{width:'100px'}}>ویرایش سفارش</button>
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
                                <input type='date' name='orderDate' value={orderDate} onChange={(e)=>setOrderDate(e.target.value)}/>
                                <div className='editeFormReservBtnBox'>
                                    {list.map(user =>
                                        <button onClick={()=>handleEditeReserv(user)}>ویرایش</button>
                                        )}
                                    
                                </div>
                            </div>

                            <div className='nameBookerBox'>
                                <div>نام و نام خانوادگی سفارش دهنده</div>
                                <div>{list.map(user => user.name)} {list.map(user => user.family)}</div>
                            </div>

                            <div>
                                {list.map(user => (
                                    user.foodSelected.map(food => (
                                        <>
                                        <div className='roomBox'>
                                            <div className='nameBox'>
                                                <h4>{food.name}</h4>
                                            </div>
                                            
                                            
                                            <div className='imgBox'>
                                                <img src={food.image} alt={food.name}/>
                                                <div className='priceBox'>
                                                    <p>سفارش از {list.map(user => food.resturant)}</p>
                                                    <h5> {food.price} تومان</h5>
                                                </div>
                                            </div>
                                            <div className='exteraBox'>
                                            <div className='h5Box'>
                                                <h5>{food.food_contents}</h5>
                                            </div>
                                            <div className='peopleBox'>
                                                <div style={{marginLeft:'15px'}}><p>تعداد : {foods.map(item => item.id === food.id && item.qty)} عدد</p></div>
                                                <div style={{marginLeft:'15px'}}><p>قیمت کل : {foods.map(item => item.id === food.id && item.qty * food.price)}</p></div>
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
 
export default OrdersList;