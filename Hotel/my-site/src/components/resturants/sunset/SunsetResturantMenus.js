import React, {useState} from 'react';
import { useGetFoodsQuery } from '../../../app/services/foodsApi';
import SunsetMenu from './SunsetMenu';

const SunsetResturantMenus = () => {
    const {data: foods, isLoading, isFetching, isError, error} = useGetFoodsQuery()
    const [flag1, setFlag1] = useState("ماکتیل های تیم حرفه ای ما")
    const [flag2, setFlag2] = useState("پیشنهاد باریستا")
    const [flag3, setFlag3] = useState("دسرها")
    const [flag4, setFlag4] = useState("پیتزا و پاستا")
    const [flag5, setFlag5] = useState("مجموعه ابداعات")

    const mocktails = foods.filter(food => food.category === "نوشیدنی های سرد" & food.type === "ماکتیل های تیم حرفه ای ما")
    const healthyDrinks = foods.filter(food => food.category === "نوشیدنی های سرد" & food.type === "نوشیدنی های سالم")
    const shakes = foods.filter(food => food.category === "نوشیدنی های سرد" & food.type === "شیک ها")

    const barista = foods.filter(food => food.category === "چای و قهوه" & food.type === "پیشنهاد باریستا") 
    const herbalTea = foods.filter(food => food.category === "چای و قهوه" & food.type === "دمنوش های الهام بخش")

    const dessert = foods.filter(food => food.category === "دسرها" & food.type === "دسرها") 
    const waffle = foods.filter(food => food.category === "دسرها" & food.type === "وافل ها و کرپ ها")
    const geranola = foods.filter(food => food.category === "دسرها" & food.type === "ماست گرانولا")

    const pizzaPasta = foods.filter(food => food.category === "غذاهای اصلی" & food.type === "پیتزا و پاستا") 
    const seaFood = foods.filter(food => food.category === "غذاهای اصلی" & food.type === "غذای دریایی")
    const sushi = foods.filter(food => food.category === "غذاهای اصلی" & food.type === "سوشی ها")
    const iranianFood = foods.filter(food => food.category === "غذاهای اصلی" & food.type === "غذای ایرانی") 
    const stake = foods.filter(food => food.category === "غذاهای اصلی" & food.type === "استیک")
    const sandwich = foods.filter(food => food.category === "غذاهای اصلی" & food.type === "ساندویچ و برگر")
    const nodel = foods.filter(food => food.category === "غذاهای اصلی" & food.type === "نودل") 
    const brakefast = foods.filter(food => food.category === "غذاهای اصلی" & food.type === "صبحانه")
    const cinnamonSauce = foods.filter(food => food.category === "غذاهای اصلی" & food.type === "دورچین و سس")

    const innovations = foods.filter(food => food.category === "پیش غذا" & food.type === "مجموعه ابداعات") 
    const salad = foods.filter(food => food.category === "پیش غذا" & food.type === "سالاد")
    const soup = foods.filter(food => food.category === "پیش غذا" & food.type === "سوپ")


    if(isLoading || isFetching) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }
    return ( 
        <>
            <div>
                <div className='sunsetColdDrinkBox'>
                    <div className='mainMenuBox'>
                        <h2>نوشیدنی های سرد</h2>
                        <div className='btnBox'>
                            <button className={flag1 ===  "ماکتیل های تیم حرفه ای ما" && 'selectStyle'} onClick={()=>setFlag1("ماکتیل های تیم حرفه ای ما")}>ماکتیل های تیم حرفه ای ما</button>
                            <button className={flag1 ===  "نوشیدنی های سالم" && 'selectStyle'} onClick={()=>setFlag1("نوشیدنی های سالم")}>نوشیدنی های سالم</button>
                            <button className={flag1 ===  "شیک ها" && 'selectStyle'} onClick={()=>setFlag1("شیک ها")}>شیک ها</button>
                        </div>
                        <div>
                        {   flag1 === "ماکتیل های تیم حرفه ای ما" &&
                            mocktails.map(mocktail => (
                                <div key={mocktail.id}>
                                    <SunsetMenu name={mocktail.name} image={mocktail.image} food_contents={mocktail.food_contents} price={mocktail.price}/> 
                                </div>       
                            ))
                        }

                        {   flag1 === "نوشیدنی های سالم" &&
                            healthyDrinks.map(healthyDrink => (
                                <div key={healthyDrink.id}>
                                    <SunsetMenu name={healthyDrink.name} image={healthyDrink.image} food_contents={healthyDrink.food_contents} price={healthyDrink.price}/> 
                                </div>       
                            ))
                        }

                        {   flag1 === "شیک ها" &&
                            shakes.map(shake => (
                                <div key={shake.id}>
                                    <SunsetMenu name={shake.name} image={shake.image} food_contents={shake.food_contents} price={shake.price}/> 
                                </div>       
                            ))
                        }
                        </div>
                    </div>
                </div>

                <div className='starStyle'>***</div>

                <div className='sunsetTeaCofeBox'>
                    <div className='mainMenuBox'>
                        <h2>چای و قهوه</h2>
                        <div className='btnBox'>
                            <button className={flag2 ===  "پیشنهاد باریستا" && 'selectStyle'} onClick={()=>setFlag2("پیشنهاد باریستا")}> پیشنهاد باریستا</button>
                            <button className={flag2 ===  "دمنوش های الهام بخش" && 'selectStyle'} onClick={()=>setFlag2("دمنوش های الهام بخش")}>دمنوش های الهام بخش</button>
                        </div>
                        <div>
                        {   flag2 === "پیشنهاد باریستا" &&
                            barista.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag2 === "دمنوش های الهام بخش" &&
                            herbalTea.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        </div>
                    </div>
                </div>

                <div className='starStyle'>***</div>

                <div className='sunsetDessertBox'>
                    <div className='mainMenuBox'>
                        <h2>دسرها</h2>
                        <div className='btnBox'>
                            <button className={flag3 ===  "دسرها" && 'selectStyle'} onClick={()=>setFlag3("دسرها")}>دسرها</button>
                            <button className={flag3 ===  "وافل ها و کرپ ها" && 'selectStyle'} onClick={()=>setFlag3("وافل ها و کرپ ها")}>وافل ها و کرپ ها</button>
                            <button className={flag3 ===  "ماست گرانولا" && 'selectStyle'} onClick={()=>setFlag3("ماست گرانولا")}>ماست گرانولا</button>
                        </div>
                        <div>
                        {   flag3 === "دسرها" &&
                            dessert.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag3 === "وافل ها و کرپ ها" &&
                            waffle.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag3 === "ماست گرانولا" &&
                            geranola.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        </div>
                    </div>
                </div>

                <div className='starStyle'>***</div>

                <div className='sunsetMainCorseBox'>
                    <div className='mainMenuBox'>
                        <h2>غذاهای اصلی</h2>
                        <div className='btnBox'>
                            <button className={flag4 ===  "پیتزا و پاستا" && 'selectStyle'} onClick={()=>setFlag4("پیتزا و پاستا")}>پیتزا و پاستا</button>
                            <button className={flag4 ===  "غذای دریایی" && 'selectStyle'} onClick={()=>setFlag4("غذای دریایی")}>غذای دریایی</button>
                            <button className={flag4 ===  "سوشی ها" && 'selectStyle'} onClick={()=>setFlag4("سوشی ها")}>سوشی ها</button>
                            <button className={flag4 ===  "غذای ایرانی" && 'selectStyle'} onClick={()=>setFlag4("غذای ایرانی")}>غذای ایرانی</button>
                            <button className={flag4 ===  "استیک" && 'selectStyle'} onClick={()=>setFlag4("استیک")}>استیک</button>
                            <button className={flag4 ===  "ساندویچ و برگر" && 'selectStyle'} onClick={()=>setFlag4("ساندویچ و برگر")}>ساندویچ و برگر</button>
                            <button className={flag4 ===  "نودل" && 'selectStyle'} onClick={()=>setFlag4("نودل")}>نودل</button>
                            <button className={flag4 ===  "صبحانه" && 'selectStyle'} onClick={()=>setFlag4("صبحانه")}>صبحانه</button>
                            <button className={flag4 ===  "دورچین و سس" && 'selectStyle'} onClick={()=>setFlag4("دورچین و سس")}>دورچین و سس</button>
                        </div>
                        <div>
                        {   flag4 === "پیتزا و پاستا" &&
                            pizzaPasta.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag4 === "غذای دریایی" &&
                            seaFood.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag4 === "سوشی ها" &&
                            sushi.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        } 

                        {   flag4 === "غذای ایرانی" &&
                            iranianFood.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }   

                        {   flag4 === "استیک" &&
                            stake.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag4 === "ساندویچ و برگر" &&
                            sandwich.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag4 === "نودل" &&
                            nodel.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag4 === "صبحانه" &&
                            brakefast.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }     

                        {   flag4 === "دورچین و سس" &&
                            cinnamonSauce.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        </div>
                    </div>
                </div>

                <div className='starStyle'>***</div>

                <div className='sunsetStarterBox'>
                    <div className='mainMenuBox'>
                        <h2>پیش غذا</h2>
                        <div className='btnBox'>
                            <button className={flag5 ===  "مجموعه ابداعات" && 'selectStyle'} onClick={()=>setFlag5("مجموعه ابداعات")}>مجموعه ابداعات</button>
                            <button className={flag5 ===  "سالاد" && 'selectStyle'} onClick={()=>setFlag5("سالاد")}>سالاد</button>
                            <button className={flag5 ===  "سوپ" && 'selectStyle'} onClick={()=>setFlag5("سوپ")}>سوپ</button>
                        </div>
                        <div>
                        {   flag5 === "مجموعه ابداعات" &&
                            innovations.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag5 === "سالاد" &&
                            salad.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
                                </div>       
                            ))
                        }

                        {   flag5 === "سوپ" &&
                            soup.map(item => (
                                <div key={item.id}>
                                    <SunsetMenu name={item.name} image={item.image} food_contents={item.food_contents} price={item.price}/> 
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
 
export default SunsetResturantMenus;