import React from 'react'

export default function Card(props) {
  return (
    <div className='bg-white rounded-lg shadow-lg p-3 mx-2 my-3'>
      <a href={props.value.link} className='text-decoration-none text-black block'>
            <div className='flex justify-center items-center flex-col'>
              {props.value.image !== '' && (
                <div className='block cardImage'>
                  <img src={props.value.image} alt="Card Image" className='w-full rounded-md mb-2' />
                </div>
              )}
              <span className='text-lg'>{props.value.cardName}</span>
            </div>
        </a>
    </div>

  )
}
