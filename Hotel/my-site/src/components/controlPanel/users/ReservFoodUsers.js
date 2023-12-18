import React,{useState} from 'react'
import UserOrder from './UserOrder'

const ReservFoodUsers = () => {
    const [seletedUserFoodForEdite, setSeletedUserFoodForEdite] = useState([])
    return ( 
        <>

            <div className='userMainBox'>
                <UserOrder seletedUserFoodForEdite={seletedUserFoodForEdite} setSeletedUserFoodForEdite={setSeletedUserFoodForEdite}/>   
            </div>

        </>
     );
}
 
export default ReservFoodUsers;




 