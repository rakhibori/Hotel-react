import React from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useGetSampleFoodQuery } from '../../app/services/sampleFoodApi';
import { useNavigate } from 'react-router-dom';

const SampleFood = () => {
    const {data: foods, isLoading, isFetching, isError, error} = useGetSampleFoodQuery()
    const navigate = useNavigate();

    if(isLoading || isFetching) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }
    
    return ( 
       <>
        <div className='goToFoodPage'>
            <button onClick={()=>navigate('/foodslist')}>همین الان غذای خود را سفارش دهید</button>
        </div>
        <div className='sampleFoodBox'>
            {
                foods.map(food => (
                    <div className='foodBox' key={food.id}>
                        <img src={food.image} alt={food.name}/>
                        <h2>{food.name}</h2> 
                        <h4>{food.resturant} {food.title}</h4>
                        <p>{food.description}</p>
                        <FaChevronLeft></FaChevronLeft><Link to={'/foodslist'}>ادامه مطلب</Link>
                    </div>
                ))
            }
            
        </div>
       </>
     );
}
 
export default SampleFood;