import React from 'react';

export default function SmallVideoCard(props) {
  return (
      <div className='flex justify-center items-center flex-col'>
        <div className='bg-white shadow-md'>
          <a href={props.values.link} className='hover:bg-gray-100 text-black block'>
            <div className='browsecVideoBoxzz'>
              <img src={props.values.image} className='w-full'></img>
            </div>
            <div className='p-3'>
              <div className='flex justify-center items-center py-2 px-3'>
                <p className='text-base'>{props.values.text}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
  );
}
