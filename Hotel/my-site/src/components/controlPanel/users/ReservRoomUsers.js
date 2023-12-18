import React,{useState} from 'react'
import UserRoom from './UserRoom';

const ReservRoomUsers = () => {
    const [seletedUserRoomForEdite, setSeletedUserRoomForEdite] = useState([])
    return ( 
        <>

            <div className='userMainBox'>
                <UserRoom seletedUserRoomForEdite={seletedUserRoomForEdite} setSeletedUserRoomForEdite={setSeletedUserRoomForEdite}/>  
            </div>

        </>
     );
}
 
export default ReservRoomUsers;




 