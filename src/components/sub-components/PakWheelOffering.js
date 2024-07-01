import React from 'react';
import PakWheelOfferingCard from './PakWheelOfferingCard';
import PakWheelOfferingCardsData from '../data/PakWheelOfferingCardsData';

export default function PakWheelOffering() {
  // PakWheelOfferingCardData
  const [pakWheelOfferingCardData, setPakWheelOfferingCardData] = React.useState(
    PakWheelOfferingCardsData.data.cardsPakWheelOffering
  );
  console.log(pakWheelOfferingCardData);

  const cardData = Array.isArray(pakWheelOfferingCardData)
    ? pakWheelOfferingCardData.map((cardData, index) => (
        <PakWheelOfferingCard key={index} values={cardData} />
      ))
    : [];

  return (
    <div>
      <div className='container mx-auto py-3'>
        <div className='container mx-auto py-5 px-5'>
          <h2 className='text-left text-2xl font-bold'>PakWheels Offerings</h2>
          <div className='py-3'>
            <div className='grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              {cardData}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

