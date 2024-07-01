import React, { useEffect, useState } from 'react';
//import $ from 'jquery';
//import 'select2/dist/css/select2.min.css';
//import 'select2';
import PriceRange from '../data/PriceRange';
import Cities from '../data/Cities';
import ButtonWithOutBg from './ButtonWithOutBg';
import BulletPoint from './BulletPoint';
import SimpleButton from './SimpleButton';
export default function HeroSection() {
    const [city, setCity] = useState(Cities.data.cities);
  const [priceRange, setPriceRange] = useState(PriceRange.data.prices);
//  useEffect(() => {
//    $('.productName').select2({
//      tags: true,
//      placeholder: 'All Cities',
//    });
//
//    $('.productPriceRange').select2({
//      tags: true,
//      placeholder: 'Price Range',
//    });
//
//    return () => {
//      $('.productName').select2('destroy');
//      $('.productPriceRange').select2('destroy');
//    };
//  }, []);
  return (
    <div>
      <div className='container-fluid mainPageSearchSection d-flex justify-content-center align-items-center flex-column'>
        <div className='pt-5 pb-2'>
          <h1 className='mainPageSearchSection--heading text-3xl'>Find Used Cars In Pakistan</h1>
          <span className='mainPageSearchSection--paragraph'>
            With thousands of cars, we have just the right one for you
          </span>
        </div>
        <div className='px-5 py-2'>
  <div className='px-3'>
    <form className='px-5 flex justify-center items-center flex-wrap'>
      <input className='text-black my-2 mx-1 px-3 py-2 border rounded-md' placeholder='Car Make Or Model'/>
      <select
        className='text-black my-2 mx-1 px-3 py-2 border rounded-md productName'
        defaultValue=""
      >
        <option className='text-black' value="">Select a City</option>
        {Array.isArray(city) ? city.map((cityItem, index) => (
          <option className='text-black' key={index} value={cityItem}>{cityItem.city_name}</option>
        )) : []}
      </select>
      <select
        className='text-black my-2 mx-1 px-3 py-2 border rounded-md productPriceRange'
        defaultValue=""
      >
        <option className='text-black' value="">Select Price Range</option>
        {Array.isArray(priceRange) ? priceRange.map((priceRangeItem, index) => (
          <option className='text-black' key={index} value={priceRangeItem}>{priceRangeItem.range}</option>
        )) : []}
      </select>
      <button className='btn my-2 mx-1 px-3 py-2 bg-green-500 text-white'>
        <i className='fas fa-search'></i>
      </button>
    </form>
  </div>
</div>

        <div className='container py-3 px-5'>
           <ButtonWithOutBg 
                 btnName="Advance Filter >" 
                 link="advance filter" 
           />
        </div>
      </div>
      {/*  */}
      <div class="container mx-auto">
    <div class="mx-auto py-3 px-5">
        <h3 class="my-3 text-2xl font-bold">Sell Your Car on PakWheels and Get the Best Price</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="grid grid-cols-1 gap-2">
                <h4 class="postAddHeading my-2 text-start text-xl">Post your Ad on PakWheels</h4>
                <div class="flex items-center text-success">
                    <i class="fas fa-check"></i>
                    <span class="ml-2">Post your Ad for Free in 3 Easy Steps</span>
                </div>
                <div class="flex items-center text-success">
                    <i class="fas fa-check"></i>
                    <span class="ml-2">Get Genuine offers from Verified Buyers</span>
                </div>
                <div class="flex items-center text-success">
                    <i class="fas fa-check"></i>
                    <span class="ml-2">Sell your car Fast at the Best Price</span>
                </div>
                <a href="#" class="btn btn-danger text-white mt-3 w-50">Post Your Ad</a>
            </div>
            
            <div class="grid grid-cols-1 gap-2">
                <h4 class="postAddHeading my-2 text-start text-xl">Try PakWheels Sell It For Me</h4>
                <div class="flex items-center text-success">
                    <i class="fas fa-check"></i>
                    <span class="ml-2">Dedicated Sales Expert to Sell your Car</span>
                </div>
                <div class="flex items-center text-success">
                    <i class="fas fa-check"></i>
                    <span class="ml-2">We Bargain for you and share the Best Offer</span>
                </div>
                <div class="flex items-center text-success">
                    <i class="fas fa-check"></i>
                    <span class="ml-2">We ensure Safe & Secure Transaction</span>
                </div>
                <a href="#" class="btn btn-secondary mt-3 w-50">Register Your Car</a>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}
