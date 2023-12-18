import React, { useState } from 'react';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';
import ResturantsInfo from './ResturantsInfo';
import SunsetResturant from './sunset/SunsetResturant';
import SkyLonjResturant from './skylonj/SkyLonjResurant';
import LatunResturant from './latun/LatunResturant';
import DibaResturant from './diba/DibaResturant';

const Resturants = () => {
    const [resturant, setResturant] = useState('main')
    return ( 
        <>
            <Header/>

            {
                resturant === 'main' &&
                <div>
                    <ResturantsInfo setResturant={setResturant}/>    
                </div>
            }

            {
                resturant === 'sunset' &&
                <div>
                    <SunsetResturant setResturant={setResturant}/> 
                </div>
            }

            {
                resturant === 'latun' &&
                <div>
                    <LatunResturant setResturant={setResturant}/>
                </div>
            }

            {
                resturant === 'skylonj' &&
                <div>
                    <SkyLonjResturant setResturant={setResturant}/>
                </div>
            }

            {
                resturant === 'diba' &&
                <div>
                    <DibaResturant setResturant={setResturant}/>
                </div>
            }

            <Footer/>
        </>
     );
}
 
export default Resturants;