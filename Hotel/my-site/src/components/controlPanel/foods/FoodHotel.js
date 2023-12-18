import React from 'react';

const FoodHotel = ({food, id, image, name, food_contents, price, category, type, resturant, removeFood, setSelectedEditeFood}) => {

    const handleRemoveFood = (id) => {
        removeFood(id)
        alert(`غذای ${name} با موفقیت حذف شد .`)
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
                        <h5> {price} تومان</h5>
                        <p>{resturant}</p>
                    </div>
                    <div className='btnBoxBlockDisplay'>
                        <button onClick={()=>setSelectedEditeFood(food)}>انتخاب</button>
                        <button onClick={()=>handleRemoveFood(id)}>حذف</button>
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
 
export default FoodHotel;