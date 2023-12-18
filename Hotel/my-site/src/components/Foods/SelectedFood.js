import React,{useState, useEffect} from 'react';
import { useGetFoodsQuery } from '../../app/services/foodsApi';
import { useUpdateFoodMutation } from '../../app/services/foodsApi';
import { useNavigate } from 'react-router-dom';

const SelectedFood = ({selectedMyFood, setFlagRezerv, setSelectedMyFood}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const {data: foods, isLoading} = useGetFoodsQuery();
    const [updateFood] = useUpdateFoodMutation();
    const navigate = useNavigate();

    useEffect(()=>{
        totalCalc()     
    }, [selectedMyFood]) 
    

    if(isLoading) {
        return<div>Loading...</div>        
    }

    const handlePlusCount = async(food)=>{ 
        var countFood = 1;
        const temp = foods.filter(item => item.id === food.id)
        const foodQty = temp[0].qty
        const index = selectedMyFood.indexOf(food);
        countFood += foodQty 
        updateFood({id: selectedMyFood[index].id, qty: countFood,  name: selectedMyFood[index].name, image: selectedMyFood[index].image, food_contents: selectedMyFood[index].food_contents, price: selectedMyFood[index].price, category: selectedMyFood[index].category, type: selectedMyFood[index].type, resturant: selectedMyFood[index].resturant})   
    }

    
    const handleMinusCount = (food) => {
        const index = selectedMyFood.indexOf(food);
        const temp = foods.filter(item => item.id === food.id)
        var countFood = temp[0].qty
        if(countFood > 1) {
            countFood -= 1
            updateFood({id: selectedMyFood[index].id, qty: countFood,  name: selectedMyFood[index].name, image: selectedMyFood[index].image, food_contents: selectedMyFood[index].food_contents, price: selectedMyFood[index].price, category: selectedMyFood[index].category, type: selectedMyFood[index].type, resturant: selectedMyFood[index].resturant}) 
        }else{
            selectedMyFood.splice(index, 1)
            setSelectedMyFood([...selectedMyFood])
            alert('غذای انتخابی شما حذف شد .')  
        }
        if(selectedMyFood.length === 0){
            setFlagRezerv(false) 
        }
    }

    

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
    
    return ( 
        <div>
            <div className='selectedmainRoomBox'>
            {
                selectedMyFood.map(food => (
                   <>
                        <div className='selectedRoomBox'>
                            <div className='namePriceBox'>
                                <div className='name'>{food.name}</div>
                                <div className='price'>{foods.map(item => item.id === food.id && item.qty * food.price)} تومان</div>
                            </div>
                            <div className='changeCountBox'>
                                <button onClick={()=>handlePlusCount(food)}>+</button>
                                     {foods.map(item => item.id === food.id && item.qty)} عدد 
                                <button onClick={()=>handleMinusCount(food)}>-</button>
                            </div>
                         </div>
                       
                   </>
                ))
            }
            </div>
            <div className='totalPrice'>
                <div className='total'>جمع کل</div>
                <div className='price'>{totalPrice} تومان</div>
            </div>
            <div>
                <button onClick={()=>navigate('/customerinfo')}  className='btn'>ثبت سفارش</button>
            </div>     
            
        </div>
    )
}
 
export default SelectedFood;