import React, {useState} from 'react';
import { useGetFoodsQuery } from '../../../app/services/foodsApi';
import SkyLonjMenu from './SkyLonjMenu';

const SkyLonjResturantMenus = () => {
    const {data: foods, isLoading, isFetching, isError, error} = useGetFoodsQuery()
    const [flag1, setFlag1] = useState("تاپاس و سالادها")
    const [flag2, setFlag2] = useState("غذاهای آسیایی")

    const salad = foods.filter(food => food.category === "پیش غذا" & food.type === "تاپاس و سالادها")
    const hotStarter = foods.filter(food => food.category === "پیش غذا" & food.type === "یک گاز داغ")
    const soup = foods.filter(food => food.category === "پیش غذا" & food.type === "سوپ ها")

    const sushi = foods.filter(food => food.category === "سوشي و خاويار" & food.type === "سوشي و خاويار") 

    const asianFood = foods.filter(food => food.category === "غذای اصلی" & food.type === "غذاهای آسیایی") 
    const kabab = foods.filter(food => food.category === "غذای اصلی" & food.type === "کباب های ابداعی")
    const specialFood = foods.filter(food => food.category === "غذای اصلی" & food.type === "غذاهای ویژه ی اسکای لانژ")
    const burger = foods.filter(food => food.category === "غذای اصلی" & food.type === "برگرهای ویژه اسکای لانژ") 
    
    const drinks = foods.filter(food => food.category === "نوشيدني ها" & food.type === "نوشيدني ها")

    

    if(isLoading || isFetching) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }
    return ( 
        <>
            <div>
                <div className='latunStarterBox'>
                    <div className='mainMenuBox'>
                        <h2>پیش غذا</h2>
                        <div className='btnBox'>
                            <button className={flag1 ===  "تاپاس و سالادها" && 'selectStyle'} onClick={()=>setFlag1("تاپاس و سالادها")}>تاپاس و سالادها</button>
                            <button className={flag1 ===  "یک گاز داغ" && 'selectStyle'} onClick={()=>setFlag1("یک گاز داغ")}>یک گاز داغ</button>
                            <button className={flag1 ===  "سوپ ها" && 'selectStyle'} onClick={()=>setFlag1("سوپ ها")}>سوپ ها</button>
                        </div>
                        <div>
                        {   flag1 === "تاپاس و سالادها" &&
                            salad.map(item => (
                                <div key={item.id}>
                                    <SkyLonjMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag1 === "یک گاز داغ" &&
                            hotStarter.map(item => (
                                <div key={item.id}>
                                    <SkyLonjMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag1 === "سوپ ها" &&
                            soup.map(item => (
                                <div key={item.id}>
                                    <SkyLonjMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }
                        </div>
                    </div>
                </div>

                <div className='starStyle'>***</div>

                <div className='skyLonjsushiBox'>
                    <div className='mainMenuBox'>
                        <h2>سوشي و خاويار</h2>
                        
                        <div>
                        {
                            sushi.map(item => (
                                <div key={item.id}>
                                    <SkyLonjMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        </div>
                    </div>
                </div>

                <div className='skyLonjMainCorseBox'>
                    <div className='mainMenuBox'>
                        <h2>غذاهای اصلی</h2>
                        <div className='btnBox'>
                            <button className={flag2 ===  "غذاهای آسیایی" && 'selectStyle'} onClick={()=>setFlag2("غذاهای آسیایی")}>غذاهای آسیایی</button>
                            <button className={flag2 ===  "کباب های ابداعی" && 'selectStyle'} onClick={()=>setFlag2("کباب های ابداعی")}>کباب های ابداعی</button>
                            <button className={flag2 ===  "غذاهای ویژه ی اسکای لانژ" && 'selectStyle'} onClick={()=>setFlag2("غذاهای ویژه ی اسکای لانژ")}>غذاهای ویژه ی اسکای لانژ</button>
                            <button className={flag2 ===  "برگرهای ویژه اسکای لانژ" && 'selectStyle'} onClick={()=>setFlag2("برگرهای ویژه اسکای لانژ")}>برگرهای ویژه اسکای لانژ</button>
                        </div>
                        <div>
                        {   flag2 === "غذاهای آسیایی" &&
                            asianFood.map(item => (
                                <div key={item.id}>
                                    <SkyLonjMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag2 === "کباب های ابداعی" &&
                            kabab.map(item => (
                                <div key={item.id}>
                                    <SkyLonjMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag2 === "غذاهای ویژه ی اسکای لانژ" &&
                            specialFood.map(item => (
                                <div key={item.id}>
                                    <SkyLonjMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        } 

                        {   flag2 === "برگرهای ویژه اسکای لانژ" &&
                            burger.map(item => (
                                <div key={item.id}>
                                    <SkyLonjMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }   

                        </div>
                    </div>
                </div>

                <div className='starStyle'>***</div>

                <div className='skyLongDrinksBox'>
                    <div className='mainMenuBox'>
                        <h2>نوشیدنی ها  </h2>
                        <div>
                        {   
                            drinks.map(item => (
                                <div key={item.id}>
                                    <SkyLonjMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
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
 
export default SkyLonjResturantMenus;