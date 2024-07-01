import React from 'react';

export default function FooterLowerSide() {
  return (
    <div className='bg-gray-900'>
      <div className='container mx-auto py-2 px-5'>
        <div className='flex justify-center items-center flex-col'>
          <span className='uppersideTextData text-secondary py-2'>
            Copyright © 2003 - 2024 PakWheels (Pvt) Ltd. - All Rights Reserved. Terms of Service | Privacy Policy
          </span>
          <span className='lowerTextData text-secondary'>
            Reproduction of material from any PakWheels.com pages without permission is strictly prohibited.
          </span>
        </div>
      </div>
    </div>
  );
}
