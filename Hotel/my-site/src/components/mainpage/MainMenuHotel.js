import React, { useState } from 'react'
import { FaAngleDown  } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const MainMenuHotel = ({flag}) => {
    const navigate = useNavigate();
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [flag3, setFlag3] = useState(false)

  return (
    <div className={flag ? 'mainMenuHotelMainBox' : 'displayNone'}>
        <div className={flag1 ? 'mainMenuHotelChangeBox1' : 'mainMenuHotelBox1'}>
           <div className='linkBox'>
                <div><FaAngleDown onClick={()=>setFlag1(!flag1)} className={flag1 ? 'faChangeIcon1' : 'faIcon1'}></FaAngleDown></div>
                <button onClick={()=>navigate('/Cooperation')}>همکاری</button>
           </div>
            <button onClick={()=>navigate('/CooperationMenu1')} className='btnlink'>نرخ های همکاری</button>
            <button onClick={()=>navigate('/CooperationMenu2')} className='btnlink'>نرخ اقامت های طولانی مدت (سی شب به بالا)</button>
            <button onClick={()=>navigate('/CooperationMenu3')} className='btnlink'>رزرو های گروهی (ده نفر به بالا)</button>
        </div>

        <div className={flag2 ? 'mainMenuHotelChangeBox2' : 'mainMenuHotelBox2'}>
            <div className='linkBox'>
                <div><FaAngleDown onClick={()=>setFlag2(!flag2)} className={flag2 ? 'faChangeIcon2' : 'faIcon2'}></FaAngleDown></div> 
                <button onClick={()=>navigate('/weddingceremonies')}>مراسم های عروسی</button>   
            </div>
            <button className='btnlink' onClick={()=>navigate('/ReqForResWedHalls')}>درخواست رزرو سالن ها</button>
        </div>
        
        <div className={flag3 ? 'mainMenuHotelChangeBox3' : 'mainMenuHotelBox3'}>
            <div className='linkBox'>
                <div><FaAngleDown onClick={()=>setFlag3(!flag3)} className={flag3 ? 'faChangeIcon3' : 'faIcon3'}></FaAngleDown></div>
                <button onClick={()=>navigate('/meetings')}>جلسات</button>
            </div>
            <button className='btnlink' onClick={()=>navigate('/ContactUs')}>تماس با ما</button><br/>
            <button className='btnlink' onClick={()=>navigate('/ReqForResMeetingRooms')}>درخواست رزرو سالن ها</button>
        </div>

        <div className='mainMenuHotelBox4'>
            <div className='linkBox'>
                <div><FaAngleDown className='faIcon'></FaAngleDown></div>
                <button onClick={()=>navigate('/specialoffer')}>پیشنهادات ویژه</button>
            </div>
        </div>
    </div>
  )
}

export default MainMenuHotel