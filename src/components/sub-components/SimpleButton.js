import React from 'react'

export default function SimpleButton(props) {
  return (
    <div>
      <a href={props.link} className={props.className}>{props.btnName}</a>
    </div>
  )
}
