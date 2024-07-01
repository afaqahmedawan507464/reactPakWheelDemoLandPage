import React from 'react';

export default function ReviewCars(props) {
  return (
    <div className="py-2">
      <div className="flex flex-col md:flex-row justify-start items-center">
        <div className='automotiveNewsImage mb-2 mx-3'>
          <img src={props.values.image} />
        </div>
        <div className='flex flex-col justify-center items-start'>
          <h6 className='font-bold text-lg'>
            {props.values.heading}
          </h6>
          <span className='text-secondary'>
            {props.values.headingText}
          </span>
          <div className='flex justify-start items-center py-2'>
            <div className='flex justify-center items-center mx-2'>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="far fa-star text-warning"></i>
              <i className="far fa-star text-warning"></i>
            </div>
            <span className='text-secondary mx-2'>{props.values.name}</span>
            <span className='text-secondary mx-2'>{props.values.date}</span>
          </div>
          
        </div>
      </div>
      <span className='text-secondary'>
            {props.values.description}
      </span>
    </div>
  );
}

