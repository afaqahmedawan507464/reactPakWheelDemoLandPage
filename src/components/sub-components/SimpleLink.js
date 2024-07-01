import React from 'react';

export default function SimpleLink(props) {
  return (
    <div>
      <a href={props.values.link} className='text-start text-secondary no-underline'>{props.values.name}</a>
    </div>
  );
}
