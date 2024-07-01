import React from 'react';
import AutoMotiveNewPost from './AutoMotiveNewPost';
import AutomotiveNews from '../data/AutomotiveNews';
import DisCussion from './DisCussion';
import ReviewCars from './ReviewCars';
import CarReviewdata from '../data/CarReviewdata.js';
import DisscussssionsData from '../data/DisscussssionsData';

export default function NewReviewsAndDisscussions() {
  //automotive News
  const [newCarsByMakeData, setNewCarsByMakeData] = React.useState(AutomotiveNews.data.autoMotiveNews);
  const cardNewCarByMake = Array.isArray(newCarsByMakeData) ? newCarsByMakeData.map((cardata, index) => {
    return (
      <AutoMotiveNewPost key={index} values={cardata} />
    );
  }) : [];
  //automotive News

  //car review
  const [newCarsReviewData, setNewCarsReviewData] = React.useState(CarReviewdata.data.carReview);
  const cardNewCarReview = Array.isArray(newCarsReviewData) ? newCarsReviewData.map((cardataCR, index) => {
    return (
      <ReviewCars key={index} values={cardataCR} />
    );
  }) : [];
  //car review

  //discussion
  const [newDiscussionData, setNewDiscussionData] = React.useState(DisscussssionsData.data.dissucussion);
  console.log(newDiscussionData)
  const cardNewDiscussion = Array.isArray(newDiscussionData) ? newDiscussionData.map((cardataDD, index) => {
    return (
      <DisCussion key={index} values={cardataDD} />
    );
  }) : [];


  const [activeTab, setActiveTab] = React.useState('automotiveNew'); // State to track active tab

    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // Update active tab state
    };
  //discussion

  return (
    <div className="bg-gray-100 py-3">
      <div className="container mx-auto py-5 px-5">
        <div className="flex justify-between items-center mb-4">
          <div className="text-start">
            <h3 className="text-xl font-bold">News, Reviews & Discussions</h3>
          </div>
          <div className="text-end">
            <a href="#" className="text-blue-500">Read All Recent News</a>
          </div>
        </div>
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mt-3">
                <li className="me-2">
                    <button onClick={() => handleTabClick('automotiveNew')} className={`inline-block p-4 ${activeTab === 'automotiveNew' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Automotive News</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('carReviews')} className={`inline-block p-4 ${activeTab === 'carReviews' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Car Reviews</button>
                </li>
                <li className="me-2">
                    <button onClick={() => handleTabClick('disscussions')} className={`inline-block p-4 ${activeTab === 'disscussions' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Disscussions</button>
                </li>
                
            </ul>
            <div className="p-6 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                {activeTab === 'automotiveNew' && (
                    <>
                        <div className="flex justify-start items-center flex-wrap py-2 px-2">
                          {cardNewCarByMake}
                        </div>
                    </>
                )}
                {activeTab === 'carReviews' && (
                    <>
                       <div className="flex justify-start py-2 px-2 items-center flex-wrap">
                           {cardNewCarReview}
                       </div>
                    </>
                )}
                {activeTab === 'disscussions' && (
                    <>
                        <div className="flex justify-start items-center px-2 py-2 flex-wrap">
                          {cardNewDiscussion}
                          
                        </div>
                    </>
                )}
            </div>
    
        </div>
      </div>
    </div>
 
  )}