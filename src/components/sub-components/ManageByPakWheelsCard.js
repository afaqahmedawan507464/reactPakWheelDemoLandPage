import React from 'react';

export default function ManageByPakWheelsCard(props) {
  return (
    <div className='bg-white shadow rounded-lg overflow-hidden mx-3 my-3'>
      <a href={props.values.link} className='block'>
        <div className='managedByPakWheelsCard--image'>
          {props.values.label !== 0 && (
            <div className='managedByPakWheelsCard--tag text-white'>
              <span className='font-bold'>FEATURED</span>
            </div>
          )}
          <img src={props.values.image} className='w-full' alt={props.values.heading} />
        </div>

        <div className='p-4'>
          <h6 className='text-lg font-semibold text-start'>{props.values.heading}</h6>
          <div className='flex flex-col justify-center items-start mt-2'>
            <span className='text-green-500 font-semibold'>PKR: {props.values.price} /=</span>
            <span className='text-gray-500'>{props.values.city}</span>
          </div>
        </div>
      </a>
    </div>
  );
}

