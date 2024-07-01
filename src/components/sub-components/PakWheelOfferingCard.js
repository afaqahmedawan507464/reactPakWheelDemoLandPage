import React from 'react';

export default function PakWheelOfferingCard(props) {
  return (
    <div className='w-full my-2'>
      <div className='bg-white shadow-md rounded-lg overflow-hidden'>
        <a href={props.values.link} className='block group'>
          <div className='p-4'>
            <div className='flex items-start'>
              {props.values.image !== '' && (
                <div className='pakWheelOffering--cardImage'>
                  <img src={props.values.image} alt='Offering' />
                </div>
              )}
              <div className='w-full md:w-2/3 md:pl-4'>
                <h6 className='text-lg font-bold mb-1'>{props.values.text1}</h6>
                <h5 className='text-base'>{props.values.text2}</h5>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

