import React from 'react'

export default function ButtonWithOutBg(props) {
  return (
    <div>
      <a href={props.link} className='btn advanceFilterButtonStyling px-3'>{props.btnName}</a>
    </div>
  )
}
