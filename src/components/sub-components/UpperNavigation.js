import React from 'react'

export default function UpperNavigation() {
  return (
    <div>
      <div className='w-full bg-gray-800'>
        <div className='container mx-auto flex justify-between items-center py-1'>
            <div className='flex items-center'>
                <i className='fas fa-mobile-alt text-red-600 mx-2'></i>
                <span className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2'>Download App via SMS</span>
            </div>
            <div className='flex items-center'>
                
                <a
                   href="#"
                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                 >
                   Sign In
                 </a>
                 <a
                   href="#"
                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                 >
                   Sign Out
                 </a>
            </div>
        </div>
      </div>
    </div>
  )
}
