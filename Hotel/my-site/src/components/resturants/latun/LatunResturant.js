import React from 'react';
import LatunResturantSlider from './LatunResturantSlider';
import { useNavigate } from 'react-router-dom';
import img from '../../../image/resturants/sunset/qrcode.png';

const LatunResturant = ({setResturant}) => {
    const navigate = useNavigate();
    return ( 
        <>
            <div className='latunResturantMainBox'>
                <div className='latunResturantSliderBox'>
                    <div className='sliderBox'>
                        <LatunResturantSlider/>    
                    </div>
                    <div className='buttonBox'>
                        <p>رستوران</p>
                        <h2>رستوران لاتون</h2>
                        <button onClick={()=>setResturant('sunset')}>کافه سان ست (بیسترو و لانژ اختصاصی سیگار)</button><br/>
                        <button onClick={()=>setResturant('diba')}>دیبا (سنتی ایرانی)</button><br/>
                        <button onClick={()=>setResturant('skylonj')}>اسکای لانژ</button>
                    </div>
                </div>
                <div className='desBox'>
                    <div className='menuBox'>
                        <h2>منو رستوران</h2>
                        <ul>
                            <li><button onClick={()=>navigate('/latunresturantmenus')}>مشاهده منو</button></li>
                        </ul>
                        <img src={img} alt='img'/>
                    </div>
                    <div className='workTimeBox'>
                        <p>خدمت رسانی صمیمی و گرم این رستوران همراه با تجارب و مهارت های آشپزهای چیره دست به شما اطمینان خاطر می دهد که لحظات سرو غذای بی عیب و نقصی خواهید داشت و همیشه طعم و رنگ غذاهای متنوع این رستوران را به خاطر خواهید سپرد. اگر به دنبال طعمی جدید و متفاوت هستید، آن را در رستوران لاتون بیابید. </p>
                        <h3>ساعات کار:</h3>
                        <p>صبحانه: 07:00 - 10:30</p>
                        <p>ناهار: 12:00 - 16:00</p>
                        <p>شام: 19:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default LatunResturant;