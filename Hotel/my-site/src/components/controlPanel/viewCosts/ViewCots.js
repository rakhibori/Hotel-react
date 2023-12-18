import React, { useEffect, useState } from 'react'
import Header from '../../mainpage/Header'
import Footer from '../../mainpage/Footer'
import { useGetUsersRoomsQuery } from '../../../app/services/usersRoomsApi'
import { useGetUsersFoodsQuery } from '../../../app/services/usersFoodsApi'

const ViewCots = () => {
    const{data: usersRoom, isLoading} = useGetUsersRoomsQuery()
    const{data: usersFood, isFeching} = useGetUsersFoodsQuery()
    const [nationalCode, setNationalCode] = useState('')
    const [reservCoset, setReservCost] = useState(0)
    const [orderCoset, setOrderCost] = useState(0)
    const [totalCoset, setTotalCost] = useState(0)
    const [reservList, setReservList] = useState([])
    const [orderList, setOrderList] = useState([])
    const [flag, setFlag] = useState(false)

    useEffect(()=>{
        setTotalCost(reservCoset + orderCoset)    
    }, [])

    

    const handleSearchViewCosts = () => {
        if(nationalCode !== ''){
            const tempReserv = usersRoom.filter(user => user.nationalCode === nationalCode)
            const tempOrder = usersFood.filter(user => user.nationalCode === nationalCode)
            setReservList(tempReserv)
            setOrderList(tempOrder)
            setFlag(true)
            setNationalCode('')
        }else{
            alert('لطفا ابتدا کد ملی خود را وارد کرده سپس کلید جستجو را فشار دهید .')
        }
    }

    useEffect(() => {
        totalReservCost()
        totalOrderCost()
        totalAllCost()    
    }, [nationalCode, reservCoset, orderCoset])

    const totalReservCost = () => {
        var sum = 0
        reservList.map(user => user.roomsSelected.map(room => sum += room.price))   
        setReservCost(sum)
    }

    const totalOrderCost = () => {
        var sum = 0
        orderList.map(user => user.foodSelected.map(food => sum += food.price))   
        setOrderCost(sum)

    }

    const totalAllCost = () => {
        setTotalCost(reservCoset + orderCoset)
    }


    if(isLoading) {
        return<div>Loading...</div>        
    }

    if(isFeching) {
        return<div>Loading...</div>        
    }

  return (
    <>
        <Header/>

            <div className='viewCotsMainBox'>
                <div className='viewCotsSearchBox'>
                    <h3>برای مشاهده کل هزینه لطفا کد ملی خود را وارد کرده سپس کلید جستجو را فشار دهید .</h3>
                    <input typeof='text' placeholder='کد ملی' value={nationalCode} onChange={(e)=>setNationalCode(e.target.value)}/>
                    <button onClick={(handleSearchViewCosts)}>جستجو</button>
                </div>

                <div className={flag ? 'displayblock' : 'displayNone'}>
                    <div className={reservList.length === 0 & orderList.length === 0 ? 'notFoundReservName' : 'displayNone'}>
                        <h3>رزرو یا سفارشی با این کد ملی در سیستم ثبت نشده است</h3>
                    </div>
                    <div className={reservList.length > 0 | orderList.length > 0 ? 'viewCotsBox' : 'displayNone'}>
                        
                        <div className='viewNameCotsBox'>
                            نام و نام خانوادگی : {reservList.map(user => user.name)} {reservList.map(user => user.family)}
                        </div>

                        <div className='viewCotsDetailBox' >
                            <div>
                                هزینه رزروهای شما : {reservCoset} تومان
                            </div>    
                            
                            <div>
                                هزینه سفارش های شما : {orderCoset} تومان
                            </div>    
                        </div>

                        <div className='viewTotalCotsBox'>
                            جمع کل هزینه های شما : {totalCoset} تومان
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <Footer/>
    </>
    
  )
}

export default ViewCots
