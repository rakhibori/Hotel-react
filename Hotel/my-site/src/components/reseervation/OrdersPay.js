
import React, { useState, useEffect } from 'react'
import img from '../../image/brandimage/3.avif'
import { useGetFoodsQuery } from '../../app/services/foodsApi';

const OrdersPay = ({cutomersFood, selectedMyFood}) => {
    const {data: foods, isLoading} = useGetFoodsQuery();
    const [totalPrice, setTotalPrice] = useState(0)
    

    

    useEffect(() => {
        totalCalc()
    }, [foods])

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

    if(isLoading) {
        return<div>Loading...</div>        
    }

    return ( 
        <>
            <div className='displayOrderingInfoMainBox'>
                <div className='displayRezervationInfoTitleBox'>
                    <h4>اطلاعات سفارش</h4>
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
                        <div className='hotelBox'>تاریخ سفارش</div>
                        <div className='hotelBox'>{cutomersFood.orderDate}</div>
                    </div>
                    <div className='displayRezervationInfoPersonHotelBox'>
                        <div className='hotelBox'>نام و نام خانوادگی</div>
                        <div className='hotelBox'>{cutomersFood.name} {cutomersFood.family}</div>
                    </div>
                    <div className='displayRezervationInfoPersonHotelBox'>
                        <div className='hotelBox'>موبایل</div>
                        <div className='hotelBox'>{cutomersFood.mobile}</div>
                    </div>  
                </div>
                <div>
                    <div className='displayRezervationInfoMainTable'>
                        <div className='nameDiv'>نام غذا</div>
                        <div className='qtyDiv'>تعداد </div>
                        <div className='resturantDiv'>رستوران</div>
                        <div className='categoryDiv'>نوع</div>
                        <div className='priceDiv'>قیمت</div>
                    </div>
                    <div className='displayRezervationInfoMainRoom'>
                        {
                            selectedMyFood.map(food => (
                                <div className='displayRezervationInfoRoom'>
                                    <div>
                                        <div className='nameDivBox'>{selectedMyFood.indexOf(food) + 1} - {food.name}</div>
                                        {/* <div className='spanRoomBox'><span>غذای شماره {selectedMyFood.indexOf(food) + 1}</span></div> */}
                                    </div>
                                    <div className='qtyDivBox'>{foods.map(item => item.id === food.id && item.qty)} عدد</div>
                                    <div className='resturantDivBox'>{food.resturant}</div>
                                    <div className='categoryDivBox'>{food.category}</div>
                                    <div className='priceDivBox'>{foods.map(item => item.id === food.id && item.qty * food.price)} تومان</div>
                                    
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
                            <div>پرداخت آنلاین غذا</div>
                        </button>
                    </div>
                </div>
            </div>   
        </>
     );
}
 
export default OrdersPay;