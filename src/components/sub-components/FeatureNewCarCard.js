import React from 'react';

export default function FeatureNewCarCard(props) {
  return (
    <div className='bg-white shadow rounded-lg overflow-hidden mx-3 my-3'>
      <a href={props.values.link} className='block cardHoverEffectz text-black text-decoration-none'>
        
        <div className='managedByPakWheelsCard--image'>
          <img src={props.values.image} className='w-full' alt={props.values.heading} />
        </div>
        
        <div className='p-4'>
          <h6 className='managedByPakWheelsCard--Text'>{props.values.heading}</h6>
          
          <div className='flex justify-center items-center flex-col'>
            <span className='text-green-500 font-semibold'>PKR: {props.values.price} /=</span>
          </div>
          
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center'>
              <i className="fas fa-star text-yellow-500 fontAwseomeIcons"></i>
              <i className="fas fa-star text-yellow-500 fontAwseomeIcons"></i>
              <i className="fas fa-star text-yellow-500 fontAwseomeIcons"></i>
              <i className="far fa-star text-yellow-500 fontAwseomeIcons"></i>
              <i className="far fa-star text-yellow-500 fontAwseomeIcons"></i>
            </div>
            <span className='text-gray-500 fontAwseomeIcons mx-2'>{props.values.city} Reviews</span>  
          </div>
          
        </div>
      
      </a>
    </div>
  );
}

