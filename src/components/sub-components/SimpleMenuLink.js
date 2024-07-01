import React from 'react'

export default function SimpleMenuLink(props) {
  return (
    <div>
      <a className='lowerNavigationBar--navLinksz text-white text-decoration-none' href=''>
        {props.name}
       </a>
    </div>
  )
}
