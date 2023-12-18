import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import MainPage from './components/mainpage/MainPage';
import RoomsList from './components/rooms/RoomsList';
import RezervationInfo from './components/rooms/RezervationInfo';
import AboutHotel from './components/AboutHotel';
import HealthCenter from './components/healthCenter/HealthCenter';
import Tourism from './components/tourism/Tourism';
import Meetings from './components/meetings/Meetings';
import WeddingCeremonies from './components/weddingCeremonies/WeddingCeremonies';
import Consert from './components/consert/Consert';
import SpecialOffer from './components/specialOffer/SpecialOffer';
import FoodsSearchList from './components/Foods/FoodsSearchList';
import FoodsList from './components/Foods/FoodsList';
import ControlPanel from './components/controlPanel/ControlPanel';
import Resturants from './components/resturants/Resturants';
import SunsetResturantMenus from './components/resturants/sunset/SunsetResturantMenus';
import LatunResturantMenus from './components/resturants/latun/LatunResturantMenus';
import SkyLonjResturantMenus from './components/resturants/skylonj/SkyLonjResturantMenus';
import DibaResturantMenus from './components/resturants/diba/DibaResturantMenus';
import RoomsAndSuites from './components/roomsAndSuites/RoomsAndSuites';
import StandardDoubleRoom from './components/roomsAndSuites/StandardDoubleRoom';
import StandardTwinRoom from './components/roomsAndSuites/StandardTwinRoom';
import RoyalFamilyRoom from './components/roomsAndSuites/RoyalFamilyRoom';
import RoyalFamilyBalconyRoom from './components/roomsAndSuites/RoyalFamilyBalconyRoom';
import JuniorSuite from './components/roomsAndSuites/JuniorSuite';
import SuiteSignature from './components/roomsAndSuites/SuiteSignature';
import RoyalSuite from './components/roomsAndSuites/RoyalSuite';
import SuiteSignaturePlus from './components/roomsAndSuites/SuiteSignaturePlus';
import SuiteSky from './components/roomsAndSuites/SuiteSky';
import AddRoom from './components/controlPanel/rooms/AddRoom';
import EditeRoom from './components/controlPanel/rooms/EditeRoom';
import AddFood from './components/controlPanel/foods/AddFood';
import EditeFood from './components/controlPanel/foods/EditeFood';
import DisplayRezervationInfo from './components/rooms/DisplayRezervationInfo';
import CheckRoomsHotel from './components/mainpage/CheckRoomsHotel';
import CustomerInfo from './components/Foods/CustomerInfo';
import DisplayOrderingInfo from './components/Foods/DisplayOrderingInfo';
import Reservation from './components/reseervation/Reservation';
import ViewCots from './components/controlPanel/viewCosts/ViewCots';
import StandardDoubleRoomSearch from './components/roomsAndSuites/StandardDoubleRoomSearch';
import StandardTwinRoomSearch from './components/roomsAndSuites/StandardTwinRoomSearch';
import RoyalFamilyRoomSearch from './components/roomsAndSuites/RoyalFamilyRoomSearch';
import RoyalFamilyBalconyRoomSearch from './components/roomsAndSuites/RoyalFamilyBalconyRoomSearch';
import JuniorSuiteSearch from './components/roomsAndSuites/JuniorSuiteSearch';
import SuiteSignatureSearch from './components/roomsAndSuites/SuiteSignatureSearch';
import RoyalSuiteSearch from './components/roomsAndSuites/RoyalSuiteSearch';
import SuiteSignaturePlusSearch from './components/roomsAndSuites/SuiteSignaturePlusSearch';
import SuiteSkySearch from './components/roomsAndSuites/SuiteSkySearch';
import Singleroomcf from './components/mainpage/sampleRoomLinks/Singleroomcf';
import SingleroomcfSearch from './components/mainpage/sampleRoomLinks/SingleroomcfSearch';
import TwinRoomViewCityCf from './components/mainpage/sampleRoomLinks/TwinRoomViewCityCf';
import TwinRoomViewCityCfSearch from './components/mainpage/sampleRoomLinks/TwinRoomViewCityCfSearch'
import StandardGardenBalcony from './components/mainpage/sampleRoomLinks/StandardGardenBalcony';
import StandardGardenBalconySearch from './components/mainpage/sampleRoomLinks/StandardGardenBalconySearch';
import ContactUs from './components/mainpage/ContactUs';
import CooperationMenu1 from './components/mainpage/coopration/CooperationMenu1';
import CooperationMenu2 from './components/mainpage/coopration/CooperationMenu2';
import CooperationMenu3 from './components/mainpage/coopration/CooperationMenu3';
import ReqForResWedHalls from './components/mainpage/ReqForResWedHalls';
import ReqForResMeetingRooms from './components/mainpage/ReqForResMeetingRooms';
import store from './app/store';
import {Provider} from 'react-redux';


export default function App1() {
    const [entryDate, setEntryDate] = useState('');
    const [exitDate, setExitDate] = useState('');
    const [stayingTime, setStayingTime] = useState('');
    const [selectedMyRoom, setSelectedMyRoom] = useState([]);
    const [roomCount, setRoomCount] = useState(1);
    const [foodSearch, setFoodSearch] = useState([])
    const [selectedMyFood, setSelectedMyFood] = useState([]);
    const [rooms, setRooms] = useState([])
    const [selectedEditeRoom, setSelectedEditeRoom] = useState([])
    const [selectedEditeFood, setSelectedEditeFood] = useState([])
    const [bookersRoom, setBookersRoom] = useState([])
    const [cutomersFood, setCutomersFood] = useState([])
    const [night, setNight] = useState(1)
    const [message, setMessage] = useState('')
    

    useEffect(()=>{
        document.title = "هتل آریا"
    }, [])
    
    return(
       <div className='mainBox'>
           <Provider store={store}>
                <Routes><Route path='/' element={<MainPage exitDate={exitDate} setExitDate={setExitDate} entryDate={entryDate} setEntryDate={setEntryDate} stayingTime={stayingTime} setStayingTime={setStayingTime} foodSearch={foodSearch} setFoodSearch={setFoodSearch} setMessage={setMessage}/>}></Route></Routes>
                <Routes><Route path='/roomsList' element={<RoomsList exitDate={exitDate} entryDate={entryDate} stayingTime={stayingTime} selectedMyRoom={selectedMyRoom} setSelectedMyRoom={setSelectedMyRoom} roomCount={roomCount} setRoomCount={setRoomCount}/>}></Route></Routes>
                <Routes><Route path='/rezervationInfo' element={<RezervationInfo selectedMyRoom={selectedMyRoom} exitDate={exitDate} entryDate={entryDate} roomCount={roomCount} stayingTime={stayingTime} setBookersRoom={setBookersRoom}/>} ></Route></Routes>
                <Routes><Route path='/abouthotel' element={<AboutHotel/>} ></Route></Routes>
                <Routes><Route path='/healthcenter' element={<HealthCenter/>} ></Route></Routes>
                <Routes><Route path='/tourism' element={<Tourism/>} ></Route></Routes>
                <Routes><Route path='/meetings' element={<Meetings/>} ></Route></Routes>
                <Routes><Route path='/weddingceremonies' element={<WeddingCeremonies/>} ></Route></Routes>
                <Routes><Route path='/consert' element={<Consert/>} ></Route></Routes>
                <Routes><Route path='/specialoffer' element={<SpecialOffer/>} ></Route></Routes>
                <Routes><Route path='/foodslist' element={<FoodsList selectedMyFood={selectedMyFood} setSelectedMyFood={setSelectedMyFood}/>} ></Route></Routes>
                <Routes><Route path='/foodssearchlist' element={<FoodsSearchList foodSearch={foodSearch} selectedMyFood={selectedMyFood} setSelectedMyFood={setSelectedMyFood} message={message}/>} ></Route></Routes>
                <Routes><Route path='/controlpanel' element={<ControlPanel setSelectedEditeRoom={setSelectedEditeRoom} setSelectedEditeFood={setSelectedEditeFood}/>} ></Route></Routes>
                <Routes><Route path='/resturants' element={<Resturants/>} ></Route></Routes>
                <Routes><Route path='/sunsetresturantmenu' element={<SunsetResturantMenus/>} ></Route></Routes>
                <Routes><Route path='/latunresturantmenus' element={<LatunResturantMenus/>} ></Route></Routes>
                <Routes><Route path='/skylonjresturantmenus' element={<SkyLonjResturantMenus/>} ></Route></Routes>
                <Routes><Route path='/dibaresturantmenus' element={<DibaResturantMenus/>}></Route></Routes>
                <Routes><Route path='/roomsandsuites' element={<RoomsAndSuites setRooms={setRooms}/>}></Route></Routes>
                <Routes><Route path='/StandardDoubleRoom' element={<StandardDoubleRoom rooms={rooms}/>}></Route></Routes>
                <Routes><Route path='/StandardTwinRoom' element={<StandardTwinRoom rooms={rooms}/>}></Route></Routes>
                <Routes><Route path='/RoyalFamilyRoom' element={<RoyalFamilyRoom rooms={rooms}/>}></Route></Routes>
                <Routes><Route path='/RoyalFamilyBalconyRoom' element={<RoyalFamilyBalconyRoom rooms={rooms}/>}></Route></Routes>
                <Routes><Route path='/JuniorSuite' element={<JuniorSuite rooms={rooms}/>}></Route></Routes>
                <Routes><Route path='/SuiteSignature' element={<SuiteSignature rooms={rooms}/>}></Route></Routes>
                <Routes><Route path='/RoyalSuite' element={<RoyalSuite rooms={rooms}/>}></Route></Routes>
                <Routes><Route path='/SuiteSignaturePlus' element={<SuiteSignaturePlus rooms={rooms}/>}></Route></Routes>
                <Routes><Route path='/SuiteSky' element={<SuiteSky rooms={rooms}/>}></Route></Routes>
                <Routes><Route path='/addroom' element={<AddRoom/>}></Route></Routes>
                <Routes><Route path='/editeroom' element={<EditeRoom selectedEditeRoom={selectedEditeRoom}/>}></Route></Routes>
                <Routes><Route path='/addfood' element={<AddFood/>}></Route></Routes>
                <Routes><Route path='/editefood' element={<EditeFood selectedEditeFood={selectedEditeFood}/>}></Route></Routes>
                <Routes><Route path='/displayrezervationinfo' element={<DisplayRezervationInfo bookersRoom={bookersRoom} selectedMyRoom={selectedMyRoom} night={night} setNight={setNight} stayingTime={stayingTime}/>}></Route></Routes>
                <Routes><Route path='/checkroomshotel' element={<CheckRoomsHotel entryDate={entryDate} setEntryDate={setEntryDate} exitDate={exitDate} setExitDate={setExitDate} stayingTime={stayingTime} setStayingTime={setStayingTime}/>}></Route></Routes>
                <Routes><Route path='/customerinfo' element={<CustomerInfo selectedMyFood={selectedMyFood} setCutomersFood={setCutomersFood}/>}></Route></Routes>
                <Routes><Route path='/displayorderinginfo' element={<DisplayOrderingInfo selectedMyFood={selectedMyFood} cutomersFood={cutomersFood}/>}></Route></Routes>
                <Routes><Route path='/reservation' element={<Reservation selectedMyRoom={selectedMyRoom} selectedMyFood={selectedMyFood} bookersRoom={bookersRoom} cutomersFood={cutomersFood} setBookersRoom={setBookersRoom}/>}></Route></Routes>
                <Routes><Route path='/viewcots' element={<ViewCots/>}></Route></Routes>
                <Routes><Route path='/standarddoubleroomsearch' element={<StandardDoubleRoomSearch/>}></Route></Routes>
                <Routes><Route path='/standardtwinroomsearch' element={<StandardTwinRoomSearch/>}></Route></Routes>
                <Routes><Route path='/royalfamilyroomsearch' element={<RoyalFamilyRoomSearch/>}></Route></Routes>
                <Routes><Route path='/royalfamilybalconyroomsearch' element={<RoyalFamilyBalconyRoomSearch/>}></Route></Routes>
                <Routes><Route path='/juniorsuitesearch' element={<JuniorSuiteSearch/>}></Route></Routes>
                <Routes><Route path='/suitesignaturesearch' element={<SuiteSignatureSearch/>}></Route></Routes>
                <Routes><Route path='/royalsuitesearch' element={<RoyalSuiteSearch/>}></Route></Routes>
                <Routes><Route path='/suitesignatureplussearch' element={<SuiteSignaturePlusSearch/>}></Route></Routes>
                <Routes><Route path='/suiteskysearch' element={<SuiteSkySearch/>}></Route></Routes>
                <Routes><Route path='/singleroomcf' element={<Singleroomcf/>}></Route></Routes>
                <Routes><Route path='/singleroomcfSearch' element={<SingleroomcfSearch/>}></Route></Routes>
                <Routes><Route path='/TwinRoomViewCityCf' element={<TwinRoomViewCityCf/>}></Route></Routes>
                <Routes><Route path='/TwinRoomViewCityCfSearch' element={<TwinRoomViewCityCfSearch/>}></Route></Routes>
                <Routes><Route path='/standardgardenbalcony' element={<StandardGardenBalcony/>}></Route></Routes>
                <Routes><Route path='/standardgardenbalconysearch' element={<StandardGardenBalconySearch/>}></Route></Routes>
                <Routes><Route path='/ContactUs' element={<ContactUs/>}></Route></Routes>
                <Routes><Route path='/CooperationMenu1' element={<CooperationMenu1/>}></Route></Routes>
                <Routes><Route path='/CooperationMenu2' element={<CooperationMenu2/>}></Route></Routes>
                <Routes><Route path='/CooperationMenu3' element={<CooperationMenu3/>}></Route></Routes>
                <Routes><Route path='/ReqForResWedHalls' element={<ReqForResWedHalls/>}></Route></Routes>
                <Routes><Route path='/ReqForResMeetingRooms' element={<ReqForResMeetingRooms/>}></Route></Routes>
           </Provider>
       </div>
    )
}