import React from 'react';
import { increment } from '../../app/services/counterSlice';
import { useDispatch } from 'react-redux';


const Food = ({food, image, name, food_contents, price, category, type, resturant, selectedMyFood, setSelectedMyFood, setFlagRezerv}) => {
    const dispatch = useDispatch();

    const handleSelectedFood = (food) => {
        if(selectedMyFood.length < 1) {
            setSelectedMyFood([...selectedMyFood, food]) 
            alert('غذای شما با موفقیت انتخاب شد .')
            dispatch(increment())
       }else{
            const index = selectedMyFood.indexOf(food)
            if(index === -1) {
                setSelectedMyFood([...selectedMyFood, food]) 
                alert('غذای شما با موفقیت انتخاب شد .')
                dispatch(increment())
            }else{
                alert('این غذا قبلا انتخاب شده است .') 
            }
       }
        setFlagRezerv(true)
    }


    return ( 
        <>
            <div className='foodBox'>
                <div className='nameBox'>
                    <h4>{name}</h4>
                </div>
                <div className='imgBox'>
                    <img src={image} alt={name}/>
                    <div className='priceBox'>
                        <p>{category}</p>
                        <h5>{price} تومان</h5>
                        <p>{resturant}</p>
                    </div>
                    <div className='btnBoxBlockDisplay'>
                        <button onClick={()=>handleSelectedFood(food)}>سفارش</button>
                    </div>
                </div>
                <div className='exteraBox'>
                    <div className='h5Box'>
                        <h5>{food_contents}</h5>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Food;