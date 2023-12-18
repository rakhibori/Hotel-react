import React from 'react'
import Header from './Header'
import Footer from './Footer'
import img from '../../image/contact/1.jpg'
import { Link  } from 'react-router-dom';

const ContactUs = () => {
  return (

    <>
    <Header/>

    <div className='contactUsMainBox'>
        <div className='contactUsImgBox'>
            <div>
                <img src={img} alt='img1'/>
            </div>
            <div>
                <Link to={'/abouthotel'}>درباره هتل</Link>
                <h1>تماس با ما</h1>
            </div>
        </div>    
        <div className='contactUsDesBox'>
            <p>تهران، سعادت آباد، ميدان بهرود، خیابان عابدی، خيابان 44، شماره 22، هتل آریا</p>
            <p>تلفن تماس: 02175777</p>
            <p>نمابر: 02175677775</p>
            <p>پست الکترونيکي: Reservations.center@ariyahotel.com</p>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default ContactUs
