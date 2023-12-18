import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { FooterValidate } from './FooterValidate';
import { FaFacebook, FaTwitter, FaInstagram,  FaEnvelope } from "react-icons/fa6";

const Footer = () => {
    const form = useFormik({
        initialValues:{name:'', family:'', mobile:''},
        onSubmit:(values, {setSubmitting}) =>{console.log(values) 
            setTimeout(() =>{
                setSubmitting(false);
            },10000)
        },

        validate:FooterValidate
    })
    return ( 
        <>
            <div className='footerBox'>
               <div className='mainLinkBox'>
                    <div>
                        <div><Link to='#'>اطلاعات کلی</Link></div>
                        <div><Link to='/resturants'>رستوران ها</Link></div>
                    </div>
                    <div>
                        <div><Link to='/ContactUs'>تماس با ما</Link></div>
                        <div><Link to='#'>وی آی پی</Link></div>
                        <div><Link to='/abouthotel'>درباره هتل</Link></div>
                    </div>
                    <div>
                        <div><Link to='/meetings'>جلسات</Link></div>
                        <div><Link to='/weddingceremonies'>مراسم های عروسی</Link></div>
                        <div><Link to='#'>شبکه های اجتماعی </Link></div>
                    </div>
                    <div>
                        <div><Link to='#'>مسیر دسترسی</Link></div>
                        <div><Link to='/roomsandsuites'>اتاق ها و سوئیت ها</Link></div>
                    </div>
               </div>
               <div className='submitBox'>
                    <div>
                        <div className='btnBox'>
                            <button type='submit' disabled={form.isSubmitting}>
                                {
                                    form.isSubmitting ? 'بارگذاری...' : 'ثبت نام'
                                }
                            </button>
                        </div>
                        <form onSubmit={form.handleSubmit}>
                            <input type='email' name='email' placeholder='جهت عضویت در خبرنامه لطفا آدرس ایمیل خود را وارد نمایید' value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/><br/>
                            <div className='errorBox'>
                                {form.errors.email && form.touched.email && <span className='errorText'>{form.errors.email}</span>}
                            </div>
                        </form>    
                    </div>
               </div>
               <div className='iconBoxFooter'>
                    <div>
                         <div className='iconBox'>
                            <FaFacebook className='icon'></FaFacebook><FaTwitter className='icon'></FaTwitter><FaInstagram className='icon'></FaInstagram><FaEnvelope className='icon'></FaEnvelope>
                        </div>
                    </div>
                    <div>
                        <p> © 2023 , تمامی حقوق برای هتل آریا محفوظ است</p>
                    </div>
               </div>
            </div>
        </>
     );
}
 
export default Footer;