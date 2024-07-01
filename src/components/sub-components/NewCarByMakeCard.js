import React from 'react';

export default function NewCarByMakeCard(props) {
  return (
      <div className="rounded-lg shadow-lg p-3 cardCusssCss">
        <a href={props.values.link} className="cardHoverEffectzzz no-underline text-black">
          <div className="card-body">
            <div className="flex flex-col items-center">
              <div className="imageNewCarByMake bg-white">
                <img src={props.values.image} alt="Car" />
              </div>
              <div className="py-2 imageNewCarByMake--text">
                <h6>{props.values.name}</h6>
              </div>
            </div>
          </div>
        </a>
      </div>
  );
}
