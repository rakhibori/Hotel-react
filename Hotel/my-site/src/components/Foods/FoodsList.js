import React, {useState} from 'react';
import { useGetFoodsQuery } from '../../app/services/foodsApi';
import Food from './Food';
import { FaStar } from "react-icons/fa6";
import SelectedFood from './SelectedFood';
import UnSelectedFood from './UnSelectedFood';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';


const FoodsList = ({selectedMyFood, setSelectedMyFood}) => {
    const {data: foods, isLoading, isFetching, isError, error} = useGetFoodsQuery()
    const [flagRezerv, setFlagRezerv] = useState(false);
    
    if(isLoading || isFetching) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }

   

    return ( 
        <>
            <Header/>

            <div className='borderBox'></div>
            <div className='videoBox'>
                <video controls loop>
                    <source src={"./video/1.mp4"} type="video/mp4"/>
                </video>
                <div className='titleVideoBox'>
                    <p>فان سنتر ،مرکز تفریحی هتل آریا طبقه -۳</p>
                </div>
            </div>
            <div className='mainroomListBox'>
                <div className='hotelAriyaBox'>
                    <div className='imgBox'>
                        <img src={'./image/ariya/1.jpg'} alt='ariya'></img>
                        <div className='starBox'>
                            <div><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar></div>
                            <div><p>هتل آریا</p></div>
                        </div>
                    </div>
                    <div>
                        <div className={flagRezerv ? 'cartBoxUnselectedNoneDisplay' : 'cartBoxUnselectedBlockDisplay'}>
                            <UnSelectedFood/>                                  
                        </div>
                        <div className={flagRezerv ?'cartBoxSelectedBlockDisplay' : 'cartBoxSelectedNoneDisplay'}>
                            <SelectedFood  setFlagRezerv={setFlagRezerv} selectedMyFood={selectedMyFood} setSelectedMyFood={setSelectedMyFood}/>
                        </div>
                    </div>
                    
                </div>
                <div className='foodListBox'>
                    {
                        foods.map(food => (
                            <div key={food.id}>
                                <Food food={food} image={food.image} name={food.name} food_contents={food.food_contents} price={food.price} category={food.category} type={food.type} resturant={food.resturant} selectedMyFood={selectedMyFood} setSelectedMyFood={setSelectedMyFood} setFlagRezerv={setFlagRezerv}/>
                            </div>
                        ))
                    }    
                </div>
            </div>

            <Footer/>
        </>
     );
}
 
export default FoodsList;