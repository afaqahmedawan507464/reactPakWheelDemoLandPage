import React from 'react';

export default function DisCussion(props) {
  return (
    <div className="py-3">
      <div className='flex flex-col justify-center items-start'>
        <h6 className='font-bold text-lg'>
          {props.values.heading}
        </h6>
        <span className='text-base'>
          {props.values.text}
        </span>
        <div className='flex justify-start items-center mt-3'>
          <span className='mx-2 flex items-center'><i className='fas fa-comments text-gray-600 mr-1'></i> {props.values.numberReplay} Replies</span>
          <span className='mx-2 flex items-center'><i className='fas fa-clock text-gray-600 mr-1'></i> {props.values.date}</span>
        </div>
      </div>
    </div>
  );
}

