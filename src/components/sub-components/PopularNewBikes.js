import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeatureNewCarCard from './FeatureNewCarCard';
import PopularBikeData from '../data/PopularBikeData';

export default function PopularNewBikes() {
  const [popularBikeData, setPopularBikeData] = React.useState(PopularBikeData.data.popularBike);
  const sliderRef_popularBike = useRef(null);

  const settings_popularBike = {
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
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNextPopularBike = () => {
    sliderRef_popularBike.current.slickNext();
  };

  const handlePrevPopularBike = () => {
    sliderRef_popularBike.current.slickPrev();
  };

  const cardData = Array.isArray(popularBikeData)
    ? popularBikeData.map((cardata, index) => (
        <FeatureNewCarCard key={index} values={cardata} />
      ))
    : [];

  return (
    <div className="container-fluid py-3">
      <div className="container py-5 px-5">
        <div className="flex justify-between items-center my-2">
          <div className="text-start">
            <h3 className="text-2xl font-bold">Popular New Bikes</h3>
          </div>
          <div className="text-end">
            <a href="#" className="text-blue-500 hover:underline">
              View All Popular Bikes
            </a>
          </div>
        </div>
        <Slider ref={sliderRef_popularBike} {...settings_popularBike}>
          {cardData}
        </Slider>
        <div className="flex justify-center mt-3">
          <button
            onClick={handlePrevPopularBike}
            className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg"
          >
            <i className="fas fa-arrow-left text-gray-500"></i>
          </button>
          <button
            onClick={handleNextPopularBike}
            className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg"
          >
            <i className="fas fa-arrow-right text-gray-500"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
