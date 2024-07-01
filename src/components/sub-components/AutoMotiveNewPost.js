import React from 'react';

export default function AutoMotiveNewPost(props) {
  return (
    <div>
      <a href={props.values.link} className='hover:shadow-lg no-underline text-black'>
        <div className="flex flex-col md:flex-row justify-center items-center py-2">
          <div className='automotiveNewsImage mb-2 mx-3'>
            <img src={props.values.image}/>
          </div>
          <div className='flex flex-col justify-center items-start'>
            <h6 className='text-left font-bold text-lg'>{props.values.heading}</h6>
            <span className='text-secondary text-left'>{props.values.date}</span>
            <p className='text-left text-sm'>{props.values.text}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

