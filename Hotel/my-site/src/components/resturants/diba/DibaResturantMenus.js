import React, {useState} from 'react';
import { useGetFoodsQuery } from '../../../app/services/foodsApi';
import DibaMenu from './DibaMenu';

const DibaResturantMenus = () => {
    const {data: foods, isLoading, isFetching, isError, error} = useGetFoodsQuery()
    const [flag1, setFlag1] = useState("آش ها")

    const soup = foods.filter(food => food.category === "پیش غذا" & food.type === "سوپ ها")
    const ash = foods.filter(food => food.category === "پیش غذا" & food.type === "آش ها")
    const starter = foods.filter(food => food.category === "پیش غذا" & food.type === "پیش غذاهای سنتی")

    

    if(isLoading || isFetching) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }
    return ( 
        <>
            <div>
                <div className='dibaStarterBox'>
                    <div className='mainMenuBox'>
                        <h2>پیش غذا</h2>
                        <div className='btnBox'>
                            <button className={flag1 ===  "آش ها" && 'selectStyle'} onClick={()=>setFlag1("آش ها")}>آش ها</button>
                            <button className={flag1 ===  "سوپ ها" && 'selectStyle'} onClick={()=>setFlag1("سوپ ها")}>"سوپ ها"</button>
                            <button className={flag1 ===  "پیش غذاهای سنتی" && 'selectStyle'} onClick={()=>setFlag1("پیش غذاهای سنتی")}>پیش غذاهای سنتی</button>
                        </div>
                        <div>
                        {   flag1 === "آش ها" &&
                            ash.map(item => (
                                <div key={item.id}>
                                    <DibaMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag1 === "سوپ ها" &&
                            soup.map(item => (
                                <div key={item.id}>
                                    <DibaMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag1 === "پیش غذاهای سنتی" &&
                            starter.map(item => (
                                <div key={item.id}>
                                    <DibaMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default DibaResturantMenus;