import React, {useState} from 'react';
import Food from './Food';
import { FaStar } from "react-icons/fa6";
import SelectedFood from './SelectedFood';
import UnSelectedFood from './UnSelectedFood';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';
import img from '../../image/about/chef1.avif'

const FoodsSearchList = ({foodSearch, selectedMyFood, setSelectedMyFood, message}) => {

    const [flagRezerv, setFlagRezerv] = useState(false);
    
    const handleSelectedFood = (food) => {
        if(selectedMyFood.length < 1) {
            setSelectedMyFood([...selectedMyFood, food]) 
       }else{
            const index = selectedMyFood.indexOf(food)
            if(index === -1) {
                selectedMyFood.push(food)
            }
       }
        setFlagRezerv(true)
    }

    return ( 
        <>
            <Header/>

            <div style={{border:'1px solid #ccc', marginTop:'10px'}}></div>
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
                            <SelectedFood  setFlagRezerv={setFlagRezerv} selectedMyFood={selectedMyFood}/>
                        </div>
                    </div>
                    
                </div>
                <div className='foodListBox'>
                    {
                        foodSearch.map(food => (
                            <div key={food.id}>
                                <Food food={food} image={food.image} name={food.name} food_contents={food.food_contents} price={food.price} category={food.category} type={food.type} resturant={food.resturant} handleSelectedFood={handleSelectedFood} selectedMyFood={selectedMyFood} setSelectedMyFood={setSelectedMyFood} setFlagRezerv={setFlagRezerv}/>
                            </div>
                        ))
                    }    
                </div>
               {
                foodSearch.length < 1 &&  
                <div className='notFoundFoodMainBox'>
                    <div className='notFoundImgBox'>
                        <img src={img} alt='img'/>
                    </div>
                    
                    <div className='notFoundFoodBox'>
                        {
                        message
                        }
                    </div>
                </div>
               }
            </div>

            <Footer/>
        </>
        
     );
}
 
export default FoodsSearchList;