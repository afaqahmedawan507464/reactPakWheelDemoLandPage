import React from 'react'

export default function BulletPoint(props) {
  return (
    <div>
      <div className='d-flex justify-content-start align-items-center px-3'>
                  <i className={props.className}></i>
                  <span className='mx-3'>{props.text}</span>
               </div>
    </div>
  )
}
