import React, {useState} from 'react';
import { useGetFoodsQuery } from '../../../app/services/foodsApi';
import LatunMenu from './LatunMenu';

const LatunResturantMenus = () => {
    const {data: foods, isLoading, isFetching, isError, error} = useGetFoodsQuery()
    const [flag1, setFlag1] = useState("پیش غذای سرد و سالاد ها")
    const [flag2, setFlag2] = useState("پیش غذای گرم")
    const [flag3, setFlag3] = useState("نوشیدنی های سرد دست ساز")

    const salad = foods.filter(food => food.category === "پیش غذا" & food.type === "پیش غذای سرد و سالاد ها")
    const soup = foods.filter(food => food.category === "پیش غذا" & food.type === "سوپ ها")

    const HotStarter = foods.filter(food => food.category === "غذای اصلی" & food.type === "پیش غذای گرم") 
    const stake = foods.filter(food => food.category === "غذای اصلی" & food.type === "استیک ها")
    const specialFood = foods.filter(food => food.category === "غذای اصلی" & food.type === "غذاهای مخصوص")
    const seaFood = foods.filter(food => food.category === "غذای اصلی" & food.type === "غذاهای دریایی تازه") 
    const kabab = foods.filter(food => food.category === "غذای اصلی" & food.type === "کباب ایرانی به سبک مدرن")
    const iranianClasicFood = foods.filter(food => food.category === "غذای اصلی" & food.type === "ایرانی کلاسیک مدرن")
    const sauce = foods.filter(food => food.category === "غذای اصلی" & food.type === "دورچین و سس") 
    

    const coldDrink = foods.filter(food => food.category === "نوشیدنی و چای" & food.type === "نوشیدنی های سرد دست ساز") 
    const cofe = foods.filter(food => food.category === "نوشیدنی و چای" & food.type === "قهوه های باریستا")
    const tea = foods.filter(food => food.category === "نوشیدنی و چای" & food.type === "دمنوش و انواع چای")
    const sweets = foods.filter(food => food.category === "نوشیدنی و چای" & food.type === "تجربه ای شیرین")


    

   

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
                            <button className={flag1 ===  "پیش غذای سرد و سالاد ها" && 'selectStyle'} onClick={()=>setFlag1("پیش غذای سرد و سالاد ها")}>پیش غذای سرد و سالاد ها</button>
                            <button className={flag1 ===  "سوپ ها" && 'selectStyle'} onClick={()=>setFlag1("سوپ ها")}>سوپ ها</button>
                        </div>
                        <div>
                        {   flag1 === "پیش غذای سرد و سالاد ها" &&
                            salad.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag1 === "سوپ ها" &&
                            soup.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }
                        </div>
                    </div>
                </div>

                <div className='starStyle'>***</div>

                <div className='latunMainCorseBox'>
                    <div className='mainMenuBox'>
                        <h2>غذاهای اصلی</h2>
                        <div className='btnBox'>
                            <button className={flag2 ===  "پیش غذای گرم" && 'selectStyle'} onClick={()=>setFlag2("پیش غذای گرم")}>پیش غذای گرم</button>
                            <button className={flag2 ===  "استیک ها" && 'selectStyle'} onClick={()=>setFlag2("استیک ها")}>استیک ها</button>
                            <button className={flag2 ===  "غذاهای مخصوص" && 'selectStyle'} onClick={()=>setFlag2("غذاهای مخصوص")}>غذاهای مخصوص</button>
                            <button className={flag2 ===  "غذاهای دریایی تازه" && 'selectStyle'} onClick={()=>setFlag2("غذاهای دریایی تازه")}>غذاهای دریایی تازه</button>
                            <button className={flag2 ===  "کباب ایرانی به سبک مدرن" && 'selectStyle'} onClick={()=>setFlag2("کباب ایرانی به سبک مدرن")}>کباب ایرانی به سبک مدرن</button>
                            <button className={flag2 ===  "ایرانی کلاسیک مدرن" && 'selectStyle'} onClick={()=>setFlag2("ایرانی کلاسیک مدرن")}>ایرانی کلاسیک مدرن</button>
                            <button className={flag2 ===  "دورچین و سس" && 'selectStyle'} onClick={()=>setFlag2("دورچین و سس")}>دورچین و سس</button>
                        </div>
                        <div>
                        {   flag2 === "پیش غذای گرم" &&
                            HotStarter.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag2 === "استیک ها" &&
                            stake.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag2 === "غذاهای مخصوص" &&
                            specialFood.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        } 

                        {   flag2 === "غذاهای دریایی تازه" &&
                            seaFood.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }   

                        {   flag2 === "کباب ایرانی به سبک مدرن" &&
                            kabab.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag2 === "ایرانی کلاسیک مدرن" &&
                            iranianClasicFood.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag2 === "دورچین و سس" &&
                            sauce.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        </div>
                    </div>
                </div>

                <div className='starStyle'>***</div>

                <div className='latunTeaCofeBox'>
                    <div className='mainMenuBox'>
                        <h2>نوشیدنی و چای </h2>
                        <div className='btnBox'>
                            <button className={flag3 ===  "نوشیدنی های سرد دست ساز" && 'selectStyle'} onClick={()=>setFlag3("نوشیدنی های سرد دست ساز")}>نوشیدنی های سرد دست ساز</button>
                            <button className={flag3 ===  "قهوه های باریستا" && 'selectStyle'} onClick={()=>setFlag3("قهوه های باریستا")}>قهوه های باریستا</button>
                            <button className={flag3 ===  "دمنوش و انواع چای" && 'selectStyle'} onClick={()=>setFlag3("دمنوش و انواع چای")}>دمنوش و انواع چای</button>
                            <button className={flag3 ===  "تجربه ای شیرین" && 'selectStyle'} onClick={()=>setFlag3("تجربه ای شیرین")}>تجربه ای شیرین</button>
                        </div>
                        <div>
                        {   flag3 === "نوشیدنی های سرد دست ساز" &&
                            coldDrink.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag3 === "قهوه های باریستا" &&
                            cofe.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag3 === "دمنوش و انواع چای" &&
                            tea.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag3 === "تجربه ای شیرین" &&
                            sweets.map(item => (
                                <div key={item.id}>
                                    <LatunMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
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
 
export default LatunResturantMenus;