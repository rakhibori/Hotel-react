import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import img from '../../image/brandimage/3.avif'
import MainMenuHotel from './MainMenuHotel';
import { useNavigate } from 'react-router-dom';
import {CSSTransition} from "react-transition-group"
import { useParams } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const [flag, setFlag] = useState(false)
    const [isEnter, setIsEnter] = useState(false)
    const params = useParams()
    console.log(params)
    const changeState = () => {
        setFlag(true)
        setIsEnter(isEnter => !isEnter)
    } 
    return ( 
        <>
             <div className='topMenu'>
                <div className='contactUs'><Link to='/ContactUs'>تماس با ما</Link></div>
                <div className='hotelShoab'><Link to='#'>مشاهده شعب هتل</Link></div>
                <div className='ariyaSite'><Link to='/'>ARIYAHOTELS.COM</Link></div>
                <div><button onClick={changeState}><FaBars></FaBars> منو اصلی هتل</button></div>
            </div>

            <CSSTransition in={isEnter} classNames='myClass' timeout={800}>
                <MainMenuHotel flag={flag}  setFlag={setIsEnter}/>
            </CSSTransition>

            <div className='brandBox'>
                <Link to='/'>
                    <div><img src={img} alt='brandImg'></img></div>
                    <h1>Ariya</h1>
                </Link>
            </div>

            <div className='navBar'>    
                <button onClick={()=>navigate('/CheckRoomsHotel')}>رزرو اتاق و سوئیت</button>
                <ul className='linkBox'>
                    <li><Link to='/abouthotel'>درباره هتل</Link></li>
                    <li><Link to='/roomsandsuites'>اتاق ها و سوئیت</Link></li>
                    <li><Link to='/resturants'>رستوران ها</Link></li>
                    <li><Link to='/healthcenter'>مراکز سلامتی</Link></li>
                    <li><Link to='/tourism'>موقعیت های گردشگری</Link></li>
                    <li><Link to='/meetings'>جلسات</Link></li>
                    <li><Link to='/weddingceremonies'>مراسم های عروسی</Link></li>
                    <li><Link to='/consert'>سالن کنسرت</Link></li>
                    <li><Link to='/specialoffer'>پیشنهادات ویژه</Link></li>
                    <li><Link to='/reservation'>رزرواسیون</Link></li>
                    <li><Link to='/controlpanel'>پنل مدیریت</Link></li>
                    <li><Link to='/viewcots'>مشاهده هزینه ها</Link></li>
                </ul>
            </div>
        </>
     );
}
 
export default Header;