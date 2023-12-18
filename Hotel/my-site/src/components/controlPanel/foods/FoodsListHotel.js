import React from 'react';
import FoodHotel from './FoodHotel';
import { useGetFoodsQuery } from '../../../app/services/foodsApi';
import { useRemoveFoodMutation } from '../../../app/services/foodsApi';
import { useNavigate } from 'react-router-dom';


const FoodsListHotel = ({setSelectedEditeFood}) => {
    const {data: foods, isLoading, isFetching, isError, error} = useGetFoodsQuery()
    const [removeFood] = useRemoveFoodMutation();
    const navigate = useNavigate();


    if(isLoading || isFetching) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }
    return ( 
        <>
            <div className='mainroomListBox'>
                <div className='foodListBox'>
                <div className='foodListTitle'>
                        <div className='managmentControlPanelBox'>
                            <div><button onClick={()=>navigate('/addfood')}>درج</button></div>
                        </div>
                        <h1>غذاها</h1>
                        <div className='managmentControlPanelBox'>
                        <div><button onClick={()=>navigate('/editefood')}>ویرایش</button></div>
                        </div>
                    </div>
                    {
                        foods.map(food => (
                            <div key={food.id}>
                                <FoodHotel food={food} id={food.id} image={food.image} name={food.name} food_contents={food.food_contents} price={food.price} category={food.category} type={food.type} resturant={food.resturant} removeFood={removeFood} setSelectedEditeFood={setSelectedEditeFood}/>
                            </div>
                        ))
                    }    
                </div>   
            </div>
        </>
     );
}
 
export default FoodsListHotel;