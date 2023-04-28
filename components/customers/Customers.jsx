import React from 'react'
import Title from '../ui/Title'
import CustumersItem from './CustumersItem'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Customers = () => {

    const NextBtn = ({onClick}) =>{
        return (
          <button
            className=" text-2xl absolute ml-2 -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white"
            onClick={onClick}
          >
            <IoIosArrowForward />
          </button>
        );
      }

      const PrevBtn = ({onClick}) => {
       return(
        <button 
        className="text-2xl absolute mr-2 -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white" 
        onClick={onClick}
        >
           <IoIosArrowBack/>

        </button>
       );
      }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

    return (
        <div className='mb-20 mt-12 mx-auto container'>
            <Title addClass="text-[40px] text-center">
                What Says Our Customers
            </Title>
               <Slider {...settings}>
                <CustumersItem imgSrc="/images/client1ec.png" />
                <CustumersItem imgSrc="/images/client2ec.png" />
                <CustumersItem imgSrc="/images/client1ec.png" />
                <CustumersItem imgSrc="/images/client2ec.png" />
               </Slider>
        </div>
    )
}

export default Customers