import React from 'react';
import DibaResturantSlider from './DibaResturantSlider';
import { useNavigate } from 'react-router-dom';
import img from '../../../image/resturants/sunset/qrcode.png';

const DibaResturant = ({setResturant}) => {
    const navigate = useNavigate();
    return ( 
        <>
            <div className='latunResturantMainBox'>
                <div className='latunResturantSliderBox'>
                    <div className='sliderBox'>
                        <DibaResturantSlider/>    
                    </div>
                    <div className='buttonBox'>
                        <p>رستوران</p>
                        <h2>رستوران دیبا</h2>
                        <button onClick={()=>setResturant('sunset')}>کافه سان ست (بیسترو و لانژ اختصاصی سیگار)</button><br/>
                        <button onClick={()=>setResturant('latun')}>لاتون (بین المللی و مدرن ایرانی)</button><br/>
                        <button onClick={()=>setResturant('skylonj')}>اسکای لانژ</button> 
                    </div>
                </div>
                <div className='desBox'>
                    <div className='menuBox'>
                        <h2>منو رستوران</h2>
                        <ul>
                            <li><button onClick={()=>navigate('/dibaresturantmenus')}>مشاهده منو</button></li>
                        </ul>
                        <img src={img} alt='img'/>
                    </div>
                    <div className='workTimeBox'>
                        <p>طراحی خوش نقش و رمانتیک این رستوران در نگاه اول شما را جذب خواهد کرد. همچنین غذاهای اصیل ایرانی همراه با رنگ و بویی سنتی سرو می شود. نوشیدنی های سنتی و لوکس از جمله چای، قهوه و دمنوش پالاس معروف این رستوران به صورت کاملا سنتی و ایرانی در اختیار شما قرار می گیرد که می توانید پس از صرف غذا از آن ها لذت ببرید.</p>
                        <h3>جهت اطلاعات بیشتر لطفا با 02175675 تماس حاصل فرمایید. </h3>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default DibaResturant;