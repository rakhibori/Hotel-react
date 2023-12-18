import React, {useState} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CooperationRates from './CooperationRates'
import LongStays from './LongStays'
import GroupReservations from './GroupReservations'

const CooperationMenu1 = () => {
  const [flag, setFlag] = useState('menu2')
  return (

    <>
        <Header/>

        <div className='cooperationMainPage'>
            <div className='cooperationButtonBox'>
                <button onClick={()=>setFlag('menu1')}>نرخ های همکاری</button>
                <button onClick={()=>setFlag('menu2')}>نرخ اقامت های طولانی مدت (سی شب به بالا)</button>
                <button onClick={()=>setFlag('menu3')}>رزرو های گروهی(ده نفر به بالا)</button>
                <p>همکاری</p>
            </div>

            <div>
                {flag === 'menu1' && <CooperationRates/>}    
                {flag === 'menu2' && <LongStays/>} 
                {flag === 'menu3' && <GroupReservations/>} 
            </div>
            
        </div>

        <Footer/>
    </>
    
  )
}

export default CooperationMenu1
