import React, { useRef } from 'react';
import ManageByPakWheelsCard from './ManageByPakWheelsCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import FeaturedUsedCardData from '../data/FeaturedUsedCardData';

export default function FeaturedUsedcarForSale() {
  const [featuredUsedCarData, setFeaturedUsedCarData] = React.useState(FeaturedUsedCardData.data.featureUsedCar);
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

  const cardData = Array.isArray(featuredUsedCarData) ? featuredUsedCarData.map((cardata, index) => {
    return (
      <ManageByPakWheelsCard key={index} values={cardata} />
    );
  }) : [];

  return (
    <div className="bg-white">
      <div className="container mx-auto py-3">
        <div className="container mx-auto py-5 px-5">
          <div className="flex justify-between items-center my-2">
            <div className="text-start">
              <h3 className="text-xl font-semibold">Featured Used Cars For Sale</h3>
            </div>
            <div className="text-end">
              <a href="#" className="text-blue-500 hover:text-blue-700">View All Featured Used Cars</a>
            </div>
          </div>
          
          <Slider ref={sliderRef} {...settings} className="mt-4">
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
