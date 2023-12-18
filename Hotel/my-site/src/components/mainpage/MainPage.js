import React from 'react';
import Header from './Header';
import Slider from './Slider';
import ChechRoom from './CheckRoom';
import Introduction from './Introduction';
import SampleRoom from './SampleRoom';
import SampleFood from './SampleFood';
import Advertising from './Advertising';
import Footer from './Footer';


const MainPage = ({entryDate, setEntryDate, exitDate, setExitDate, stayingTime, setStayingTime, foodSearch, setFoodSearch, setMessage}) => {
    
    return ( 
        <>
            <Header/>  
            <Slider/>
            <ChechRoom entryDate={entryDate} setEntryDate={setEntryDate} exitDate={exitDate} setExitDate={setExitDate} stayingTime={stayingTime} setStayingTime={setStayingTime} setFoodSearch={setFoodSearch} setMessage={setMessage}/>
            <Introduction/> 
            <SampleRoom/>
            <SampleFood/>  
            <Advertising/> 
            <Footer/>     
        </>
     );
}

export default MainPage;