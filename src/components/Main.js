import React from 'react';
import HeroSection from './sub-components/HeroSection';
import BrowseUsedCars from './sub-components/BrowseUsedCars';
import PakWheelOffering from './sub-components/PakWheelOffering';
import ManagedByPakWheels from './sub-components/ManagedByPakWheels';
import FeaturedUsedcarForSale from './sub-components/FeaturedUsedcarForSale';
import FeaturedNewCar from './sub-components/FeaturedNewCar';
import AutoStoreCarPart from './sub-components/AutoStoreCarPart';
import NewBikeByMake from './sub-components/NewBikeByMake';
import PopularNewBikes from './sub-components/PopularNewBikes';
import BrowseOurVideo from './sub-components/BrowseOurVideo';
import NewReviewsAndDisscussions from './sub-components/NewReviewsAndDisscussions';
import GetPakWheelApp from './sub-components/GetPakWheelApp';
export default function Main() {
  return (
    <div>
      <HeroSection />
      <BrowseUsedCars />
      <PakWheelOffering />
      <ManagedByPakWheels />
      <FeaturedUsedcarForSale />
      <FeaturedNewCar />
      <AutoStoreCarPart />
      <NewBikeByMake />
      <PopularNewBikes />
      <BrowseOurVideo />
      <NewReviewsAndDisscussions />
      <GetPakWheelApp />
    </div>
  );
}
