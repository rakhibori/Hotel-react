import React from 'react';
import ResturantsSlider from './ResturantsSlider';
import Resturant from './Resturant';
import img1 from '../../image/resturants/small1.jpg';
import img2 from '../../image/resturants/small2.jpg';
import img3 from '../../image/resturants/small3.jpg';
import img4 from '../../image/resturants/small4.jpg';

const ResturantsInfo = ({setResturant}) => {
    const resturants = [
        {id:1, image:img1, name:'کافه سان ست', title:'(کافی شاپ و سالن ویژه سیگار)', description:'طعم لته هایی که در این کافه خواهید نوشید هیچگاه از ذهنتان پاک نخواهد شد. نوشیدنی های سرد و گرم متنوعی در این کافه وجود دارد که می توانید از آن ها لذت ببرید. همچنین، میان وعده های سبک، مافین و انواع شیرینی های خوشمزه ی این کافه به شما پیشنهاد داده می شود. یکی از بهترین تجربه هایی که می تواند در این کافه داشته باشید سرو کردن غذا در فضای باز این کافه استکه با چشم انداز بکری از تهران تکمیل می شود.'},
        {id:2, image:img2, name:'رستوران لاتون', title:'(رستوران مدرن ایرانی و بین المللی)', description:'خدمت رسانی صمیمی و گرم این رستوران همراه با تجارب و مهارت های آشپزهای چیره دست به شما اطمینان خاطر می دهد که لحظات سرو غذای بی عیب و نقصی خواهید داشت و همیشه طعم و رنگ غذاهای متنوع این رستوران را به خاطر خواهید سپرد. اگر به دنبال طعمی جدید و متفاوت هستید، آن را در رستوران لاتون بیابید.'},
        {id:3, image:img3, name:'رستوران دیبا', title:'(رستوران سنتی ایرانی)', description:'طراحی خوش نقش و رمانتیک این رستوران در نگاه اول شما را جذب خواهد کرد. همچنین غذاهای اصیل ایرانی همراه با رنگ و بویی سنتی سرو می شود. نوشیدنی های سنتی و لوکس از جمله چای، قهوه و دمنوش معروف این رستوران به صورت کاملا سنتی و ایرانی در اختیار شما قرار می گیرد که می توانید پس از صرف غذا از آن ها لذت ببرید.'},
        {id:4, image:img4, name:'اسکای لانژ', title:'رستوران اسکای لانژ', description:''}
    ]
    return ( 
        <>
            <div className='resturantsInfoMainBox'>
                <div className='resturantsInfoSliderBox'>
                    <div className='sliderBox'>
                        <ResturantsSlider/>
                    </div>
                    <div className='buttonBox'>
                        <h2>رستوران های هتل</h2>
                        <button onClick={()=>setResturant('sunset')}>کافه سان ست (بیسترو و لانژ اختصاصی سیگار)</button><br/>
                        <button onClick={()=>setResturant('latun')}>لاتون (بین المللی و مدرن ایرانی)</button><br/>
                        <button onClick={()=>setResturant('diba')}>دیبا (سنتی ایرانی)<br/></button><br/>
                        <button onClick={()=>setResturant('skylonj')}>اسکای لانژ</button>
                    </div>
                </div>
                <div className='parBox'>
                    <p>دروازه ی زیبای هتل آریا را نظاره گر باشید.</p>
                    <p>هتل آریا با قرار گرفتن در منطقه ی شمال تهران مانند جواهری نهان در یک بهشت آرام نگاه ها را به خود خیره می کند. این هتل با در نظر گرفتن انتظارات متفاوت، خدمات لوکس متفاوتی را ارائه می دهد. همچنین، طراحی این هتل با استفاده از معماری معاصر و متاثر از معماری حیرت انگیز گذشته، سلیقه های همه ی سنین را در نظر گرفته است. شاید به همین خاطر باشد که اسم آن را "کاخ" انتخاب کرده اند. علاوه بر این، به عنوان یکی از بهترین ساحتمان های موجود در تهران، این کاخ چشم نواز شامل یک لابی باشکوه، فضاهای عمومی شگرف و مخصوصا اتاق های مجهز و استاندارد می باشد. </p>
                </div>
                <div>
                    {
                        resturants.map(resturant=> (
                            <div key={resturant.id}>
                                <Resturant image={resturant.image} name={resturant.name} title={resturant.title} description={resturant.description}/>
                            </div>
                        ))
                    }
                </div>
            </div>    
        </>
     );
}
 
export default ResturantsInfo;