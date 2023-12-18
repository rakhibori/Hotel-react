import React from 'react';
import SkyLonjResturantSlider from './SkyLonjResturantSlider';
import { useNavigate } from 'react-router-dom';
import img from '../../../image/resturants/sunset/qrcode.png';

const SkyLonjResturant = ({setResturant}) => {
    const navigate = useNavigate();
    return ( 
        <>
            <div className='latunResturantMainBox'>
                <div className='latunResturantSliderBox'>
                    <div className='sliderBox'>
                        <SkyLonjResturantSlider/>    
                    </div>
                    <div className='buttonBox'>
                        <p>رستوران</p>
                        <h2>اسکای لانژ</h2>
                        <button onClick={()=>setResturant('sunset')}>کافه سان ست (بیسترو و لانژ اختصاصی سیگار)</button><br/>
                        <button onClick={()=>setResturant('latun')}>لاتون (بین المللی و مدرن ایرانی)</button><br/>
                        <button onClick={()=>setResturant('diba')}>دیبا (سنتی ایرانی)</button> 
                    </div>
                </div>
                <div className='desBox'>
                    <div className='menuBox'>
                        <h2>منو رستوران</h2>
                        <ul>
                            <li><button onClick={()=>navigate('/skylonjresturantmenus')}>مشاهده منو</button></li>
                        </ul>
                        <img src={img} alt='img'/>
                    </div>
                    <div className='workTimeBox'>
                        <p>رستوران اسکای لانژ </p>
                        <h3>ساعات کار:</h3>
                        <p>روزانه: 7:00 عصر - 2:00 صبح </p>
                        <p>آخرین سفارش آشپزخانه در روزهای هفته: 00:30 </p>
                        <p>آخرین سفارش آشپزخانه در آخر هفته: 01:00 </p>
                        <p>بوفه مجلل برانچ: جمعه ها 11:00 - 16:00</p>
                        <p>انواع اقلام صبحانه، انواع غذاهای ایرانی، انواع غذاهای بین المللی، سوشی بار و دسر ها</p>
                        <p>جهت رزرو و کسب اطلاعات بیشتر با شماره 02175675 تماس حاصل فرمایید </p>
                        <p>تعداد میزها محدود و رزرو قبلی الزامی می باشد</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SkyLonjResturant;