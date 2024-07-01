import React from 'react';
import NewCarByMakeCard from './NewCarByMakeCard';
import NewBikeByMakeCardData from '../data/NewBikeByMakeCardData';

export default function NewBikeByMake() {
  const [newCarsByMakeData, setNewCarsByMakeData] = React.useState(NewBikeByMakeCardData.data.newBikeMakeBy);

  const cardNewCarByMake = Array.isArray(newCarsByMakeData) ? newCarsByMakeData.map((cardata, index) => (
    <NewCarByMakeCard key={index} values={cardata} />
  )) : [];

  return (
    <div className='container-fluid bg-gray-100'>
      <div className='container py-3 px-5'>
        <h3 className='text-left py-3 text-xl font-bold'>New Bikes by Make</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {cardNewCarByMake}
        </div>
      </div>
    </div>
  );
}
