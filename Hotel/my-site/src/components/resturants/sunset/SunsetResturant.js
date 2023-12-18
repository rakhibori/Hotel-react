import React from 'react';
import SunsetResturantSlider from './SunsetResturantSlider';
import { useNavigate } from 'react-router-dom';
import img from '../../../image/resturants/sunset/qrcode.png';

const SunsetResturant = ({setResturant}) => {
    const navigate = useNavigate();
    return ( 
        <>
            <div className='sunsetResturantMainBox'>
                <div className='sunsetResturantSliderBox'>
                    <div className='sliderBox'>
                        <SunsetResturantSlider/>    
                    </div>
                    <div className='buttonBox'>
                        <p>رستوران</p>
                        <h2>کافه سان ست</h2>
                        <button onClick={()=>setResturant('latun')}>لاتون (بین المللی و مدرن ایرانی)</button><br/>
                        <button onClick={()=>setResturant('diba')}>دیبا (سنتی ایرانی)</button><br/>
                        <button onClick={()=>setResturant('skylonj')}>اسکای لانژ</button>
                    </div>
                </div>
                <div className='desBox'>
                    <div className='menuBox'>
                        <h2>منو رستوران</h2>
                        <ul>
                            <li><button onClick={()=>navigate('/sunsetresturantmenu')}>مشاهده منو</button></li>
                        </ul>
                        <img src={img} alt='img'/>
                    </div>
                    <div className='workTimeBox'>
                        <p>طعم لته هایی که در این کافه خواهید نوشید هیچگاه از ذهنتان پاک نخواهد شد. نوشیدنی های سرد و گرم متنوعی در این کافه وجود دارد که می توانید از آن ها لذت ببرید. همچنین، میان وعده های سبک، مافین و انواع شیرینی های خوشمزه ی این کافه به شما پیشنهاد داده می شود. یکی از بهترین تجربه هایی که می توانید در این کافه داشته باشید سرو کردن غذا در فضای باز این کافه است که با چشم انداز بکری از تهران تکمیل می شود. ما در کافه سانست با بهره مندی از فضای باز، فضای داخلی و لانژ اختصاصی سیگار به تمام سلایق احترام می گزاریم. </p>
                        <h3>ساعات کار:</h3>
                        <p>روزانه: 07:00 - 02:00</p>
                        <p>آخرین سفارش آشپزخانه: 01:30</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SunsetResturant;