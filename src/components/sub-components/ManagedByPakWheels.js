import React, { useRef } from 'react';
import ManageByPakWheelsCard from './ManageByPakWheelsCard';
import ManageByPakWheelsCardData from '../data/ManageByPakWheelsCardData.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ManagedByPakWheels() {
  const [manageByPakWheelsCardData, setManageByPakWheelsCardData] = React.useState(ManageByPakWheelsCardData.data.manageByPakWheelsCardData);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const cardData = Array.isArray(manageByPakWheelsCardData) ? manageByPakWheelsCardData.map((cardata, index) => {
    return (
      <ManageByPakWheelsCard key={index} values={cardata} />
    );
  }) : [];

  return (
    <div>
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto py-5 px-5">
          <div className="flex justify-between items-center my-2">
            <div className="text-left">
              <h3 className="text-2xl font-bold">Managed By Pak Wheels</h3>
            </div>
            <div className="text-right">
              <a href="#" className="text-blue-500 text-sm">View All Managed By PakWheels Cars</a>
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {cardData}
          </Slider>
          <div className="flex justify-center mt-3">
            <button onClick={handlePrev} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button onClick={handleNext} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
