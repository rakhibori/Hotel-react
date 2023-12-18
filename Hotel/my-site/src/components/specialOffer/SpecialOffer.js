import React from 'react';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';
import Package from './Package';
import img1 from '../../image/special offer/1.jpg';
import img2 from '../../image/special offer/2.jpg';
import img3 from '../../image/special offer/3.jpg';
import img4 from '../../image/special offer/4.jpg';

const SpecialOffer = () => {

    const items = [
        {id:1, image:img2, name:'پکیج تولد', title:'این پکیج شامل:', description: ['شرایط رزرو : اقدام برای رزرو حداقل ۲۴ ساعت قبل ورود ','خروج دیرهنگام تا ساعت 13 ',' کیک تولد رایگان ', ' دیزاین مخصوص اتاق']},
        {id:2, image:img3, name:'پکیج سالگرد ازدواج', title:'این پکیج شامل:', description: ['شرایط رزرو : اقدام برای رزرو حداقل ۲۴ ساعت قبل ورود ','خروج دیرهنگام تا ساعت 13 ','دیزاین مخصوص اتاق','شام دونفره رایگان تا سقف ۲۰۰۰۰۰۰ ریال ']},
        {id:3, image:img4, name:'پکیج اتاق و شام', title:'این پکیج شامل:', description:['شام دونفره رایگان در رستوران اسکای لانج', 'خروج دیرهنگام تا ساعت 13']}
    ]

    return ( 
        <>
            <div>
                <Header/>

                <div>
                    <div className='spcialOfferBox'>
                        <div>
                            <img src={img1} alt='img1'/>
                        </div>
                        <div className='spcialOfferDecBox'>
                            <span>پیشنهادات ویژه</span>
                            <h2>پکیج های اقامتی</h2>
                            <p>هتل آریا یک هتل با خدمات بسیار شگفت انگیز است. اقامت در هتل آریا همیشه یک اقامت خاص برای مهمانها بوده و یک افتخار برای هتل که میزبان چنین میهمانانی بوده است، امکانات و سرویس های پنج ستاره هتل با جاذبه ها و فضای راحت آن گره خورده است و به مخاطب احساس راحتی در خانه را می دهد. </p>  
                        </div>
                    </div>
                    <di className='packageMainBox'>
                        {
                            items.map(item => (
                                <Package id={item.id} image={item.image} name={item.name} title={item.title} description={item.description}/>
                            ))
                        }    
                    </di>
                </div>

                <Footer/>
            </div>
        </>
     );
}
 
export default SpecialOffer;