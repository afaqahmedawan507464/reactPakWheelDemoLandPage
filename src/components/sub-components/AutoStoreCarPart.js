import React, { useRef } from 'react';
import AutoStoreCarPartData from '../data/AutoStoreCarPartData';
import Card from './Card';
import MakeData from '../data/MakeData';
import CardModels from '../data/CardModels';
import AutoStoreBrandzData from '../data/AutoStoreBrandzData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function AutoStoreCarPart() {
    const [cardSubCategoryData, setCardSubCategoryData] = React.useState(AutoStoreCarPartData.data.cards);
    const cardSubCategory = Array.isArray(cardSubCategoryData) 
        ? cardSubCategoryData.map((cardValues, index) => <Card key={index} value={cardValues} />) 
        : [];

    const [loadingData, setLoadingData] = React.useState(MakeData.data.makes);
    const makes = Array.isArray(loadingData) 
        ? loadingData.map((makeValues, index) => <Card key={index} value={makeValues} />) 
        : [];

    const [cardModelData, setCardModelData] = React.useState(CardModels.data.model);
    const cardModel = Array.isArray(cardModelData) 
        ? cardModelData.map((cardModelDataValue, index) => <Card key={index} value={cardModelDataValue} />) 
        : [];

    const [cardAutoStoreBrandData, setCardAutoStoreBrandData] = React.useState(AutoStoreBrandzData.data.cardsAutoStoreBrand);
    const cardAutoStoreBrand = Array.isArray(cardAutoStoreBrandData) 
        ? cardAutoStoreBrandData.map((cardAutoStoreBrandData, index) => <Card key={index} value={cardAutoStoreBrandData} />) 
        : [];

    const [activeTab, setActiveTab] = React.useState('subCategory'); // State to track active tab

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

        const sliderRefBrandz = useRef(null);
      
        const settingsBrandz = {
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
      
        const handleBrandzNext = () => {
          sliderRefBrandz.current.slickNext();
        };
      
        const handleBrandzPrev = () => {
          sliderRefBrandz.current.slickPrev();
        };

    return (
        <div>
            <div className='container mx-auto py-3'>
                <div className='container mx-auto py-5 px-5'>
                    <h3 className='text-left text-2xl font-semibold'>Auto Store Car Parts & Accessories</h3>
                    <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4">
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mt-3">
                <li className="me-2">
                    <button onClick={() => handleTabClick('subCategory')} className={`inline-block p-4 ${activeTab === 'subCategory' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Sub Category</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('makesz')} className={`inline-block p-4 ${activeTab === 'makesz' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Make</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('Modelsz')} className={`inline-block p-4 ${activeTab === 'Modelsz' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Model</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('brandsz')} className={`inline-block p-4 ${activeTab === 'brandsz' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Brandz</button>
                </li>
            </ul>
            <div className="p-6 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                {activeTab === 'subCategory' && (
                    <>
                       
                    <Slider ref={sliderRef} {...settings}>
                           {/*<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">*/}
                           {cardSubCategory}
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
                    </>
                )}
                {activeTab === 'makesz' && (
                    <>
                        <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                                {makes}
                            </div>
                    </>
                )}
                {activeTab === 'Modelsz' && (
                    <>
                        <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                                {cardModel}
                            </div>
                    </>
                )}
                {activeTab === 'brandsz' && (
                    <>
                        {/*<div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>*/}
                        <Slider ref={sliderRefBrandz} {...settingsBrandz}>
                        {cardAutoStoreBrand}
                        </Slider>
                        <div className="flex justify-center mt-3">
            <button onClick={handleBrandzPrev} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button onClick={handleBrandzNext} className="mx-2 bg-white shadow border border-blue-500 px-4 py-2 rounded-lg">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
                                
                            {/*</div>*/}
                    </>
                )}
            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
