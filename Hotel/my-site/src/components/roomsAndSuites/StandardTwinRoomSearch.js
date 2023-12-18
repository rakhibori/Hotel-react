import React, {useState} from 'react'
import { FaStar } from "react-icons/fa6";
import DatePicker   from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import opacity from "react-element-popper/animations/opacity"
import { useGetSampleRoomQuery } from '../../app/services/sampleRoomApi';
import UnSelectedRoom from '../rooms/UnSelectedRoom';
import SelectedRoom from './SelectedRoom';
import Room from './Room';
import RezervationInfo from './RezervationInfo';
import DisplayRezervationInfo from './DisplayRezervationInfo';
import { useNavigate } from 'react-router-dom';

const StandardTwinRoomSearch = () => {
    const {data: sampleRoom, isLoading, isError, error} = useGetSampleRoomQuery()
    const [flagRezerv, setFlagRezerv] = useState(false)
    const [entryDate, setEntryDate] = useState('');
    const [exitDate, setExitDate] = useState('');
    const [stayingTime, setStayingTime] = useState('');
    const [selectedMyRoom, setSelectedMyRoom] = useState([]);
    const [bookersRoom, setBookersRoom] = useState([]);
    const [flagInfo, setFlagInfo] = useState(false)
    const [flagDisplay, setFlagDisplay] = useState(false)
    const navigate = useNavigate()

    
    const myRoom = sampleRoom.filter(room => room.name === "اتاق تویین استاندارد")

    const handleSubmitReserv = () => {
        if(selectedMyRoom.length > 0) {
            setFlagInfo(true)
        }else{
            alert('لطفا اتاق مورد نظر را رزرو نمایید')
        }
    }

    if(isLoading) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }

  return (

    <>
           <div className={flagInfo ? 'displayNoneSearch' : 'displayBlockSearch'}>
                <div className='videoBox'>
                    <video controls loop>
                        <source src={"./video/1.mp4"} type="video/mp4"/>
                    </video>
                    <div className='titleVideoBox'>
                        <p>فان سنتر ،مرکز تفریحی هتل آریا طبقه -۳</p>
                    </div>
                </div>
                <div className='mainroomListBox'>
                <div className='hotelAriyaBox'>
                    <div className='imgBox'>
                        <img src={'./image/ariya/1.jpg'} alt='ariya'></img>
                        <div className='starBox'>
                            <div><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar><FaStar className='icon'></FaStar></div>
                            <div><p>هتل آریا</p></div>
                        </div>
                    </div>
                   

                    <div className='dateBox'>
                        <div><h5>{entryDate.toString()} - {exitDate.toString()}</h5></div>
                        <div><p>تاریخ اقامت</p></div>
                    </div>
                    <div>
                        <div className={flagRezerv ? 'cartBoxUnselectedNoneDisplay' : 'cartBoxUnselectedBlockDisplay'}>
                            <UnSelectedRoom/>                                  
                        </div>
                        <div className={flagRezerv ?'cartBoxSelectedBlockDisplay' : 'cartBoxSelectedNoneDisplay'}>
                            <SelectedRoom  setFlagRezerv={setFlagRezerv} selectedMyRoom={selectedMyRoom} setSelectedMyRoom={setSelectedMyRoom} stayingTime={stayingTime}/>
                        </div>
                    </div>
                    
                </div>

                
                <div className='roomListBox'>
                    <div className='standardDoubleRoomSearchBox'>
                        <div className='selectDate'>
                            <select value={stayingTime} onChange={(e)=>setStayingTime(e.target.value)}>
                                <option>مدت اقامت</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                            </select>
                            <DatePicker placeholder='تاریخ ورود' className='DatePicker' id='entryDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={entryDate} onChange={setEntryDate}/>
                            <DatePicker placeholder='تاریخ خروج' className='DatePicker' id='exitDate' animations={[opacity({ from: 0.1, to: 1, duration: 1000 })]}  calendar={persian} locale={persian_fa} value={exitDate} onChange={setExitDate}/>
                        </div>
                    </div>
                    {
                        myRoom.map(room => (
                            <div key={room.id}>
                                <Room  flagRezerv={flagRezerv} setFlagRezerv={setFlagRezerv} selectedMyRoom={selectedMyRoom} setSelectedMyRoom={setSelectedMyRoom} exitDate={exitDate.toString()} entryDate={entryDate.toString()} stayingTime={stayingTime} room={room} name={room.name}  price={room.price} people={room.people} image={room.image} bed={room.bed} extera_person={room.extera_person} capacity={room.capacity} additional_service={room.additional_service} breakfast={room.breakfast} description={room.description} possibilities={room.possibilities}/>
                            </div>
                        ))
                    }  
                    <div className='standardDoubleRoomSearchBox'>
                        <div className='btnDiv'>
                            <button onClick={handleSubmitReserv}  className='btn'>ثبت رزرو</button><br/>
                            <button onClick={()=>navigate('/ThreeFamilyBedViewCityCf')} className='btn2'>برگشت</button>
                        </div> 
                    </div> 
                </div>
                </div>
           </div>
            <div className={flagDisplay ? 'displayNoneSearch' : 'displayBlockSearch'}>
                {
                    flagInfo && <RezervationInfo selectedMyRoom = {selectedMyRoom} entryDate={entryDate.toString()} exitDate={exitDate.toString()} stayingTime={stayingTime} setBookersRoom={setBookersRoom} setFlagDisplay={setFlagDisplay}/>
                }
            </div>
            <div>
                {
                    flagDisplay && <DisplayRezervationInfo bookersRoom={bookersRoom} entryDate={entryDate.toString()} exitDate={exitDate.toString()} selectedMyRoom={selectedMyRoom} stayingTime={stayingTime}/>
                }
            </div>
        </>
  )
}

export default StandardTwinRoomSearch; 

