import React, {useState} from 'react';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';
import Tour from './Tour';
import CityTour from './CityTour';
import ShoppingTrip from './ShoppingTrip';


const Tourism = () => {
    const [flag, setFlag] = useState('tour')
    return ( 
        <>
            <Header/>

          <div className='torismMainBox'>
            {
                (flag === 'tour') && <Tour setFlag={setFlag}/>
            }
            {
                (flag === 'citytour') && <CityTour setFlag={setFlag}/>    
            }
            {
                (flag === 'shoppingtrip') && <ShoppingTrip setFlag={setFlag}/>    
            }
             
            
          </div>
            

            <Footer/>
        </>
     );
}
 
export default Tourism;