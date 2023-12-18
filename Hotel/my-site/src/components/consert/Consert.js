import React from 'react';
import ConsertSlider from './ConsertSlider';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';

const Consert = () => {
    return ( 
        <>
            <div>
                <Header/>

                <div className='consertSliderBox'>
                    <div className='sliderBox'>
                        <ConsertSlider/>
                    </div>
                    <div>
                        <h2>سالن کنسرت</h2>
                    </div>
                </div>
                <div className='consertDescriptionBox'>
                    <h3>سالن کنسرت هتل آریا </h3>
                    <p>یکی از مجلل ترین و ممتازترین سالن های خاورمیانه که به زیبایی برای اجرای کنسرت، تئاتر، سخنرانی ها و مراسمات ویژه در هتل آریا طراحی گردیده است. </p>
                    <p>جهت اطلاعات بیشتر با همکاران متخصص ما در این امر تماس حاصل فرمایید</p>
                    <p>شماره تماس: 02175675 </p>
                </div>

                <Footer/>
            </div>
        </>
     );
}
 
export default Consert;