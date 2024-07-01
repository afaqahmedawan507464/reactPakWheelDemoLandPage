import React, { useState, useRef } from 'react'
import Card from './Card'
import CardsData from '../data/CardsData'
import { isArray } from 'jquery';
import MakeData from '../data/MakeData';
import BodyType from '../data/BodyType';
import CardCities from '../data/CardCities';
import CardModels from '../data/CardModels';
import CardBuget from '../data/CardBuget';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function BrowseUsedCars() {
    //cards loading
  const [cardData, setCardData] = React.useState(CardsData.data.cards);
  const cards = Array.isArray(cardData) ? cardData.map((cardValues, index) => {
    return <Card key={index} value={cardValues} />;
  }) : [];
   //cards loading  
   //makes loading
   const [loadingData, setLoadingData] = React.useState(MakeData.data.makes);
   const makes = Array.isArray(loadingData) ? loadingData.map((makeValues, index) => {
    return <Card key={index} value={makeValues} />;
  }) : [];
   //makes loading
   //body type
   const [bodyTypeData, setBodyTypeData] = React.useState(BodyType.data.bodyType);
   const bodyType = Array.isArray(bodyTypeData) ? bodyTypeData.map((bodyTypeValue, index) => {
    return <Card key={index} value={bodyTypeValue}  />
   }) : [];
   //body type   
   //CardCity
   const [cardCityData, setCardCityData] = React.useState(CardCities.data.cities);
   const cardCity = Array.isArray(cardCityData) ? cardCityData.map((cardCityDataValue, index) => {
    return <Card key={index} value={cardCityDataValue}  />
   }) : [];
   //cardCity
   //CardModel
   const [cardModelData, setCardModelData] = React.useState(CardModels.data.model);
   const cardModel = Array.isArray(cardModelData) ? cardModelData.map((cardModelDataValue, index) => {
    return <Card key={index} value={cardModelDataValue}  />
    }) : [];
    //cardModel
    //CardBuget
    const [cardBugetData, setCardBugetData] = React.useState(CardBuget.data.range);
    const cardBuget = Array.isArray(cardBugetData) ? cardBugetData.map((cardBugetDataValue, index) => {
        return <Card key={index} value={cardBugetDataValue}  />
        }) : [];
        //cardBuget
        const [activeTab, setActiveTab] = useState('category'); // State to track active tab

        const handleTabClick = (tabName) => {
            setActiveTab(tabName); // Update active tab state
        };
        
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

        const sliderRefBodyType = useRef(null);
      
        const settingsBodyType = {
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
      
        const handleBodyTypeNext = () => {
          sliderRefBodyType.current.slickNext();
        };
      
        const handleBodyTypePrev = () => {
          sliderRefBodyType.current.slickPrev();
        };
  return (
    <div>
        <div className='container-fluid bg-light py-3'>
        <div className='container py-5 px-5'>
            <h1 className='text-left text-2xl font-bold'>Browse Used Cars</h1>
            

<div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mt-3">
                <li className="me-2">
                    <button onClick={() => handleTabClick('category')} className={`inline-block p-4 ${activeTab === 'category' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Category</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('city')} className={`inline-block p-4 ${activeTab === 'city' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>City</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('make')} className={`inline-block p-4 ${activeTab === 'make' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>MAke</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('model')} className={`inline-block p-4 ${activeTab === 'model' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Model</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('budget')} className={`inline-block p-4 ${activeTab === 'budget' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Budget</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('bodyType')} className={`inline-block p-4 ${activeTab === 'bodyType' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Body Type</button>
                </li>
            </ul>
            <div className="p-6 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                {activeTab === 'category' && (
                    <>
                        {/*<div className="flex justify-center items-center flex-col py-3">*/}
                        <Slider ref={sliderRef} {...settings}>
                           {/*<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">*/}
                           {cards}
                           {/*</div>*/}
                           </Slider>
                           <div className="flex justify-center mt-3">
            <button onClick={handlePrev} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button onClick={handleNext} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
                        {/*</div>*/}
                    </>
                )}
                {activeTab === 'city' && (
                    <>
                     <div className="flex justify-center items-center flex-col py-3">
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
                          {cardCity}
                        </div>
                     </div>
                    </>
                )}
                {activeTab === 'make' && (
                    <>
                        <div className="flex justify-center items-center flex-col py-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
                         {makes}
                        </div>
                        </div>
                    </>
                )}
                {activeTab === 'model' && (
                    <>
                        <div className="flex justify-center items-center flex-col py-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
                           {cardModel}
                        </div>
                        </div>
                    </>
                )}
                {activeTab === 'budget' && (
                    <>
                        <div className="flex justify-center items-center flex-col py-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
                          {cardBuget}
                        </div>
                        </div>
                    </>
                )}
                {activeTab === 'bodyType' && (
                    <>
                        {/*<div className="flex justify-center items-center flex-col py-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">*/}
                        <Slider ref={sliderRefBodyType} {...settingsBodyType}>
                          {bodyType}
                        </Slider>
                        <div className="flex justify-center mt-3">
            <button onClick={handleBodyTypePrev} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button onClick={handleBodyTypeNext} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
                        {/*</div>
                        </div>*/}
                    </>
                )}
            </div>
        </div>

</div>
</div>
      
    </div>
  )
}
