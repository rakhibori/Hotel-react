import React from 'react';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';
import { useGetSampleRoomQuery } from '../../app/services/sampleRoomApi';
import SampleRoom from './SampleRoom';

const RoomsAndSuites = ({setRooms}) => {
    const {data: rooms , isLoading, isFetching, isError, error} = useGetSampleRoomQuery()
    setRooms(rooms)

    if(isLoading || isFetching) {
        return<div>Loading...</div>        
    }
    if(isError){
        return<div>Error : {error.status}</div>
    }

    return ( 
        <>
            <Header/>  

            <div className='mainRoomsAndSuitesBox'>
                <div className='descriptionBox'>
                    <div className='title'>
                        <p>اتاق ها و سوئیت های هتل آریا</p>
                        <h2>تجربه ای منحصر به فرد در انتظار شماست</h2>
                    </div>
                    <div className='description'>
                        <p>هتل آریا با احترام به کسانی که این هتل را برای اقامت خود انتخاب می کنند، تمامی امکانات و سرویس های رفاهی یک هتل پنج ستاره ی لوکس را دارا می باشد. لابی این هتل مطابق بروزترین مدل طراحی شده است. همه ی اقلام استفاده شده در دکوراسیون مجلل و لوکس بوده و استفاده از هرگونه عنصری که احتمال داشته حتی ذره ای باعث نازیبایی آن شود شدیدا جلوگیری شده است.</p>
                    </div>
                </div>
                <div className='titleMainBox'>
                    <div className='div1'></div>
                    <div className='roomBox'>
                        <h3>اتاق ها و سوئیت ها</h3>
                    </div>
                    <div className='div2'></div>
                </div>
                <div className='sampleRoomMainBox'>
                    {
                        rooms.map(room => (
                            <SampleRoom id={room.id} image={room.image} name={room.name} description={room.description} link={room.link} possibilities={room.possibilities}/>
                        ))
                    }
                </div>
            </div>
            <Footer/>   
        </>
     );
}
 
export default RoomsAndSuites;