import React from 'react';
import img from '../../video/2.mp4'
import { Link } from 'react-router-dom';
import { FaPhone, FaInstagram } from "react-icons/fa6";

const Advertising = () => {
    return ( 
        <>
            <div className='mainAdverBox'>
                <h2>شرکت اجاره خودرو (رنتینال)</h2>
                <div className='adverBox'>
                    <div>
                        <video controls loop>
                            <source src={img} type="video/mp4"/>
                        </video>
                        <div className='spanIconBox'>
                            <span>Rentinal</span><span><FaPhone></FaPhone>09125035039</span><span><FaInstagram></FaInstagram>Rentinal</span>
                        </div>
                    </div>
                    <div className='parBox'>
                        <p>شرکت رنتینال با بیش از یک دهه سابقه درخشان در صنعت اجاره خودرو با تجربه ی کافی در این زمینه، تمام تلاش خود را می کند تا خدمات خود را به عالی ترین شکل ممکنه ارائه دهد. در  رنتینال خودرو به صورت همراه با راننده، بدون راننده و خودروی عروس اجاره داده می شود از نکات تمایز ما نسبت به رقبا می توان به مالکیت اکثریت خودروها توسط شرکت و تنوع در اجاره ماشین های لوکس خارجی و اقتصادی و خانوادگی در تهران و سراسر ایران اشاره نمود که توانسته است رضایت و توجه مشتریان را به خود جلب کند.</p>
                        <p>در رنتینال ، با توجه به تنوع بالای لیست خودروهای اجاره ای، شما می توانید با هر بودجه ای که داشته باشید، از ما خودرو اجاره کنید. سازمان های دولتی و خصوصی، توریست های ایرانگرد و گردشگران فعال از جمله مشتریان وفادار ما هستند .</p>
                        <p>برای رزرو و اجاره خودرو مورد نظرتان می توانید از طریق سایت ما به صورت آنلاین و کاملا راحت اقدام کنید و یا با کارشناسان ما در بخش فروش تماس بگیرید تا بهترین گزینه را به شما پیشنهاد دهند.</p>
                    </div>
                </div>
                    <div className='contactBox'>
                        <div>
                            <h3>اطلاعات تماس</h3>
                            <h5>آدرس دفتر :</h5> <span>سعادت اباد ، خیابان بخشایش ، کوچه ۱۷ غربی ، برج عرفان ، طبقه ۲ ، واحد ۲۰۴</span><br/>
                            <h5>تلفن دفتر :</h5><span>88564552-021 . 88564553-021</span><br/>
                            <h5>فکس دفتر:</h5><span>88564553-021</span><br/>
                            <h5>موبایل :</h5><span>09125035039</span><br/>
                            <h5>تلفن :</h5><span>88564552-021</span><br/>
                            <h5>واتس آپ :</h5><span>09125035039</span><br/>
                        </div>
                        <button>
                            <Link to={'https://rentinal.info'} target='_blank'>خودروی خود را از رنتینال اجاره کنید</Link>
                        </button>
                    </div>
            </div>
        </>
     );
}
 
export default Advertising;