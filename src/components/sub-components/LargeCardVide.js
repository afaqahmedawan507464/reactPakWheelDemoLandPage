import React from 'react';

export default function LargeCardVide(props) {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='bg-white shadow-md'>
        <a href={props.values.link} className='hover:bg-gray-100 text-black block'>
          <div className='browsecVideoBox'>
            <img src={props.values.image}></img>
          </div>
          <div className='p-3'>
            <div className='flex justify-center items-center py-2 px-3'>
              <h6 className='text-base'>{props.values.text}</h6>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
