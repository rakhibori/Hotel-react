import React,{useState, useEffect} from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import img1 from '../../image/health center/1.jpg';
import img2 from '../../image/health center/2.jpg';
import img3 from '../../image/health center/3.jpg';
import img4 from '../../image/health center/4.jpg';
import img5 from '../../image/health center/5.jpg';
import img6 from '../../image/health center/6.jpg';
import img7 from '../../image/health center/7.jpg';
import img8 from '../../image/health center/8.jpg';

const initIndexNumber = 0

const Slider = () => {

    const[indexNumber, setIndexNumber] = useState(initIndexNumber)

    const slides = [
        {id:1, image:img1, alt:'image1'},
        {id:2, image:img2, alt:'image2'},
        {id:3, image:img3, alt:'image3'},
        {id:4, image:img4, alt:'image4'},
        {id:5, image:img5, alt:'image5'},
        {id:6, image:img6, alt:'image6'},
        {id:7, image:img7, alt:'image7'},
        {id:8, image:img8, alt:'image8'},
    ]

    useEffect(() => {
        changeSlideHandler()
    }, [])

    const changeSlideHandler = () => {
        setTimeout(() => {
            nextSlideHandler() 
            changeSlideHandler()   
        },3000)
    }

    const perviousSlideHandler = () => [
        setIndexNumber((prevState) => (prevState -1 + slides.length) % slides.length)
    ]

    const nextSlideHandler = () => [
        setIndexNumber((prevState) => (prevState +1) % slides.length)
    ]

    return ( 
        <div className='sliderBox'>
           {
            slides.map((slide) => (
                <img key={slide.id} src={slide.image} alt={slide.alt} className={indexNumber +1 === slide.id ? 'active' : 'deactive'}/>
            ))
           } 

           <FaAngleLeft className='leftIcon' onClick={perviousSlideHandler}></FaAngleLeft>
           <FaAngleRight className='rightIcon' onClick={nextSlideHandler}></FaAngleRight>
        </div>
     );
}
 
export default Slider;