import React, { useRef } from 'react';
import ManageByPakWheelsCard from './ManageByPakWheelsCard.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FeatureNewCarCard from './FeatureNewCarCard.js';
import PopularCarData from '../data/PopularCarData.js';
import UpcomingCarData from '../data/UpcomingCarData.js';
import NewLauchedCarData from '../data/NewLauchedCarData.js';
import NewcarByMakeCardData from '../data/NewcarByMakeCardData.js';
import NewCarByMakeCard from './NewCarByMakeCard.js';

export default function FeaturedNewCar() {
  // Popular Cars
  const [popularData, setPopularData] = React.useState(PopularCarData.data.popularCar);
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

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const cardData = Array.isArray(popularData) ? popularData.map((cardata, index) => {
    return (
      <FeatureNewCarCard key={index} values={cardata} />
    );
  }) : [];

  // Upcoming Cars
  const [upcomingData, setUpcomingData] = React.useState(UpcomingCarData.data.upcomingCar);
  const sliderRef_upcoming = useRef(null);
  const settingsUpcoming = {
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

  const handleUpcomingPrev = () => {
    sliderRef_upcoming.current.slickPrev();
  };

  const handleUpcomingNext = () => {
    sliderRef_upcoming.current.slickNext();
  };

  const cardDataUpcoming = Array.isArray(upcomingData) ? upcomingData.map((cardata, index) => {
    return (
      <FeatureNewCarCard key={index} values={cardata} />
    );
  }) : [];

  // New Launched Cars
  const [newLaunchedData, setNewLaunchedData] = React.useState(NewLauchedCarData.data.newCar);
  const sliderRef_newLaunched = useRef(null);
  const settingsNewLaunched = {
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

  const handleNewLaunchedPrev = () => {
    sliderRef_newLaunched.current.slickPrev();
  };

  const handleNewLaunchedNext = () => {
    sliderRef_newLaunched.current.slickNext();
  };

  const cardDataNewLaunched = Array.isArray(newLaunchedData) ? newLaunchedData.map((cardata, index) => {
    return (
      <FeatureNewCarCard key={index} values={cardata} />
    );
  }) : [];

  // New Cars by Make
  const [newCarsByMakeData, setNewCarsByMakeData] = React.useState(NewcarByMakeCardData.data.newCarMakeBy);
  const cardNewCarByMake = Array.isArray(newCarsByMakeData) ? newCarsByMakeData.map((cardata, index) => {
    return (
      <NewCarByMakeCard key={index} values={cardata} />
    );
  }) : [];

  const [activeTab, setActiveTab] = React.useState('popular'); // State to track active tab

    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // Update active tab state
    };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-3">
        <div className="container mx-auto py-5 px-5">
          <div className="flex justify-between items-center my-2">
            <div className="text-start">
              <h3 className="text-xl font-semibold">Featured New Cars</h3>
            </div>
            <div className="text-end">
              <a href="#" className="text-blue-500 hover:text-blue-700 text-decoration-none">View All New Cars</a>
            </div>
          </div>

          <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mt-3">
                <li className="me-2">
                    <button onClick={() => handleTabClick('popular')} className={`inline-block p-4 ${activeTab === 'popular' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Popular</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('upcoming')} className={`inline-block p-4 ${activeTab === 'upcoming' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Upcoming</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('newLauched')} className={`inline-block p-4 ${activeTab === 'newLauched' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>New Launched</button>
                </li>
                
            </ul>
            <div className="p-6 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                {activeTab === 'popular' && (
                    <>
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
                    </>
                )}
                {activeTab === 'upcoming' && (
                    <>
                        <Slider ref={sliderRef_upcoming} {...settingsUpcoming} className="mt-4">
                          {cardDataUpcoming}
                        </Slider>
                        <div className="flex justify-center mt-3">
                          <button onClick={handleUpcomingPrev} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
                            <i className="fas fa-arrow-left"></i>
                          </button>
                          <button onClick={handleUpcomingNext} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
                            <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                    </>
                )}
                {activeTab === 'newLauched' && (
                    <>
                        <Slider ref={sliderRef_newLaunched} {...settingsNewLaunched} className="mt-4">
                           {cardDataNewLaunched}
                         </Slider>
                         <div className="flex justify-center mt-3">
                           <button onClick={handleNewLaunchedPrev} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
                             <i className="fas fa-arrow-left"></i>
                           </button>
                           <button onClick={handleNewLaunchedNext} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
                             <i className="fas fa-arrow-right"></i>
                           </button>
                         </div>
                    </>
                )}
            </div>
        </div>

          <div className="container py-3 px-5">
            <h3 className="text-xl font-semibold text-start py-3">New Cars by Make</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cardNewCarByMake}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
