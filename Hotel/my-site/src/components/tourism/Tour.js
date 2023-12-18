import React from 'react';
import img from '../../image/tourism/4.jpg'
import TourSlider from './TourSlider'

const Tour = ({setFlag}) => {
    return ( 
        <>
             <div className='torismSliderBox'>
                <div className='sliderBox'>
                    <TourSlider/>    
                </div>
                <div className='buttonBox'>
                    <h2>موقعیت های گردشگری</h2>
                    <button onClick={()=>setFlag('citytour')}>با علاقه سفر کنید!</button><br/>
                    <button onClick={()=>setFlag('shoppingtrip')}>خرید در شهر</button>
                </div>
            </div>
            <div className='torismImgBox'>
                <div className='imgSmallBox'>
                    <img src={img} alt='img'/><br/>
                    <span>درباره هتل آریا</span>
                    <p> هتل آریا با احترام به کسانی که این هتل را برای اقامت انتخاب می کنند، تمامی امکانات و سرویس های رفاهی یک هتل پنج ستاره ی لوکس را دارا می باشد. علاوه بر این، جذابیت های گیرای دکوراسیون خاص آن همراه با فضای صمیمی و راحتی که موجبات آرامش و آسایش را فراهم می آورد، از دیگر عواملی است که این هتل را محبوبترین هتل تهران ساخته است. </p>
                </div>
                <div className='titleBox'>
                    <h2>بهترین جاذبه های تهران را کشف کنید! </h2>
                    <p>کاوش در این کلان شهر جذاب شما را به سفری به قدمت بیش از ٢٥٠ دهه از تاریخ ایران منتقل میکند. از کاشی های پر زرق و برق کاخ گلستان گرفته تا برج با شکوه آزادی همه و همه یادگارهای کهن این مرز و بوم هستند. همچنین موزه های تاریخی و باغ های زیبای بسیاری وجود دارند که باید زمانی را برای دیدن آنها صرف کنید. در این مکان ها و همچنین کافه های مدرن، قهوه خانه های سنتی و مسیرهای پیاده روی کوهستانی احساس آرامش کنید و از بودن در تهران لذت ببرید. </p>
                </div>
            </div>
        </>
     );
}
 
export default Tour;