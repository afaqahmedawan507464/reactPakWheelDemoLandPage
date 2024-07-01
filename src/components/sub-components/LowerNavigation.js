import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DropDownMenu from './DropDownMenu';
import MobileDropDown from './MobileDropDown';

export default function LowerNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-8 w-auto"
                src="../pakwheel-logo2.png"
                alt="Your Logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="../pakwheel-logo2.png"
                alt="Your Logo"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                
                
                <DropDownMenu 
                
                name="Used Cars"
                submenu={[
                  {
                    text: "Find Used Cars for Sale",
                    paragraph: "Search from over 110k options",
                    icon: "fas fa-search ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Featured Used Cars",
                    paragraph: "View featured cars by PakWheels",
                    icon: "fas fa-star ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Sell Your Car",
                    paragraph: "Post a free ad and sell your car quickly",
                    icon: "fas fa-tag ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Used Car Dealers",
                    paragraph: "Find used car dealers near your",
                    icon: "fas fa-book ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Price Calculator",
                    paragraph: "Calculate the market price of cars",
                    icon: "fas fa-calculator ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "PakWheels Certified Cars",
                    paragraph: "Cars with the PakWheels seal of approval",
                    icon: "fas fa-check ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "PakWheels Car Inspection",
                    paragraph:
                      "Car with detailed PakWheels Inspection reports",
                    icon: "fas fa-thumbs-up ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "PakWheels Sell It For Me",
                    paragraph:
                      "Let PakWheels sell your car hassle free for you",
                    icon: "fas fa-thumbs-up ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Auction Sheet Verification",
                    paragraph:
                      "Authentic Auction Sheets for your peace of mind",
                    icon: "fas fa-file ms-2 me-4",
                    href: "/",
                  },
                ]}
                cities={[
                  {
                    text: "Popular Cities",
                    paragraph: "",
                    icon: "fas fa-map ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Lahore",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Karachi",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Islamabad",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Peshawar",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Quetta",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                models={[
                  {
                    text: "Popular Models",
                    paragraph: "",
                    icon: "fas fa-car ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Toyota",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Honda",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Nissan",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Mitsubishi",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                />

                <DropDownMenu 
                
                name="Find New Cars"
                submenu={[
                  {
                    text: "Find Used Cars for Sale",
                    paragraph: "See new cars in Pakistan",
                    icon: "fas fa-search ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Car Comparisons",
                    paragraph: "Compare cars and find their differences",
                    icon: "fas fa-yen-sign ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Reviews",
                    paragraph: "Read reviews of all cars in Pakistan",
                    icon: "fas fa-comments ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Prices",
                    paragraph: "See prices of new cars",
                    icon: "fas fa-tag ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "On Road Price",
                    paragraph: "Calculate the total cost of new car",
                    icon: "fas fa-road ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "New Car Dealers",
                    paragraph: "Find new car dealers",
                    icon: "fas fa-book ms-2 me-4",
                    href: "/",
                  },
                ]}
                cities={[
                  {
                    text: "Popular New Cars",
                    paragraph: "",
                    icon: "fas fa-car ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Honda Civic",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Toyota Corolla",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Swift",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Nissan Altima",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Mitsubishi Lancer",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Honda City",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Toyota Camry",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Cultus",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                models={[
                  {
                    text: "Popular Brands",
                    paragraph: "",
                    icon: "fas fa-car ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Toyota",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Honda",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Nissan",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Mitsubishi",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                />

                <DropDownMenu 
                
                name="Bikes"
                submenu={[
                  {
                    text: "Find Used Bikes",
                    paragraph: "Find your dream bike",
                    icon: "fas fa-search ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Used Bikes Listings",
                    paragraph: "Search from over 5000+ options",
                    icon: "fas fa-motorcycle ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Featured Used Bikes",
                    paragraph: "Browse our featured bikes",
                    icon: "fas fa-star ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Sell Your Bike",
                    paragraph: "Post a free ad and sell your bike quickly",
                    icon: "fas fa-tag ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Find New Bikes",
                    paragraph: "See new bikes in Pakistan",
                    icon: "fas fa-calculator ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Bike Comparisons",
                    paragraph: "Compare bikes and find their differences",
                    icon: "fas fa-yen-sign ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Bike Reviews",
                    paragraph: "Read reviews of all bikes in Pakistan",
                    icon: "fas fa-comments ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "New Bikes Prices",
                    paragraph: "See prices of new bikes",
                    icon: "fas fa-tag ms-2 me-4",
                    href: "/",
                  },
                ]}
                cities={[
                  {
                    text: "Popular New Bikes",
                    paragraph: "",
                    icon: "fas fa-motorcycle ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Honda 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki GS 150",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Yamaha YBR 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki GD 110",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Honda CG 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Hayabusa",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Yamaha FZ 150",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Intruder",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                models={[
                  {
                    text: "Popular New Bikes",
                    paragraph: "",
                    icon: "fas fa-motorcycle ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Honda 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki GS 150",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Yamaha YBR 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki GD 110",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Honda CG 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Hayabusa",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Yamaha FZ 150",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Intruder",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                />
                <DropDownMenu 
                
                name="Auto Store"
                submenu={[
                  {
                    text: "PakWheels Autostore",
                    paragraph:
                      "Buy Auto Parts & Accessories directly from PakWheels",
                    icon: "fas fa-shop ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Find Auto Parts",
                    paragraph: "Find auto parts for your car",
                    icon: "fas fa-search ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Sell Car Parts",
                    paragraph:
                      "Post a free ad and sell your car parts quickly",
                    icon: "fas fa-tag ms-2 me-4",
                    href: "/",
                  },
                ]}
                
                />
                 <a
                   href="#"
                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                 >
                   Videos
                 </a>
                 <a
                   href="#"
                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                 >
                   Forums
                 </a>
                 <a
                   href="#"
                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                   Blog
                 </a>
                  <DropDownMenu
                    name="More"
                    submenu={[
                      {
                        text: "Cool Rides",
                        paragraph: "Member Rides Cars & Bikes",
                        icon: "fas fa-thumbs-up ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Car Import",
                        paragraph: "Import your favourite Car",
                        icon: "fas fa-arrow-down ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Car Insurance",
                        paragraph:
                          "Post a free ad and sell your car parts quickly",
                        icon: "fas fa-umbrella ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Car Finance",
                        paragraph: "Compare plans and apply for car loan",
                        icon: "fas fa-dollar-sign ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "MTMIS Pakistan",
                        paragraph: "Online Vehicle Verification",
                        icon: "fas fa-check ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "DLIMS Pakistan",
                        paragraph: "Driving License Verification System",
                        icon: "fas fa-check ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Current Petrol Prices",
                        paragraph: "Check latest Petrol, Diesel and CNG Price",
                        icon: "fas fa-dollar-sign ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Pakwheels Partner Workshop",
                        paragraph: "Auto Repair Workshop",
                        icon: "fas fa-shop ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Car-registration-header",
                        paragraph:
                          "Car Registration Hassle-free Car Registration",
                        icon: "fas fa-tag ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Car-ownership-transfer-header",
                        paragraph:
                          "Car Ownership Transfer Hassle-free Car Transfer",
                        icon: "fas fa-shop ms-2 me-4",
                        href: "/",
                      },
                    ]}
                  />

                  <DropDownMenu
                    className="btn btn-danger text-white"
                    name="Post an ads"
                    models={[
                      {
                        text: "Sell your car",
                        paragraph: "",
                        icon: "",
                        href: "/",
                      },
                      {
                        text: "Sell your bike",
                        paragraph: "",
                        icon: "",
                        href: "/",
                      },
                      {
                        text: "Sell your accessories",
                        paragraph: "",
                        icon: "",
                        href: "/",
                      },
                    ]}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 menusBorders">
            
          <MobileDropDown 
                
                name="Used Cars"
                submenu={[
                  {
                    text: "Find Used Cars for Sale",
                    paragraph: "Search from over 110k options",
                    icon: "fas fa-search ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Featured Used Cars",
                    paragraph: "View featured cars by PakWheels",
                    icon: "fas fa-star ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Sell Your Car",
                    paragraph: "Post a free ad and sell your car quickly",
                    icon: "fas fa-tag ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Used Car Dealers",
                    paragraph: "Find used car dealers near your",
                    icon: "fas fa-book ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Price Calculator",
                    paragraph: "Calculate the market price of cars",
                    icon: "fas fa-calculator ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "PakWheels Certified Cars",
                    paragraph: "Cars with the PakWheels seal of approval",
                    icon: "fas fa-check ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "PakWheels Car Inspection",
                    paragraph:
                      "Car with detailed PakWheels Inspection reports",
                    icon: "fas fa-thumbs-up ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "PakWheels Sell It For Me",
                    paragraph:
                      "Let PakWheels sell your car hassle free for you",
                    icon: "fas fa-thumbs-up ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Auction Sheet Verification",
                    paragraph:
                      "Authentic Auction Sheets for your peace of mind",
                    icon: "fas fa-file ms-2 me-4",
                    href: "/",
                  },
                ]}
                cities={[
                  {
                    text: "Popular Cities",
                    paragraph: "",
                    icon: "fas fa-map ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Lahore",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Karachi",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Islamabad",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Peshawar",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Quetta",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                models={[
                  {
                    text: "Popular Models",
                    paragraph: "",
                    icon: "fas fa-car ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Toyota",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Honda",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Nissan",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Mitsubishi",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                />

                <MobileDropDown
                
                name="Find New Cars"
                submenu={[
                  {
                    text: "Find Used Cars for Sale",
                    paragraph: "See new cars in Pakistan",
                    icon: "fas fa-search ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Car Comparisons",
                    paragraph: "Compare cars and find their differences",
                    icon: "fas fa-yen-sign ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Reviews",
                    paragraph: "Read reviews of all cars in Pakistan",
                    icon: "fas fa-comments ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Prices",
                    paragraph: "See prices of new cars",
                    icon: "fas fa-tag ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "On Road Price",
                    paragraph: "Calculate the total cost of new car",
                    icon: "fas fa-road ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "New Car Dealers",
                    paragraph: "Find new car dealers",
                    icon: "fas fa-book ms-2 me-4",
                    href: "/",
                  },
                ]}
                cities={[
                  {
                    text: "Popular New Cars",
                    paragraph: "",
                    icon: "fas fa-car ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Honda Civic",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Toyota Corolla",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Swift",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Nissan Altima",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Mitsubishi Lancer",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Honda City",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Toyota Camry",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Cultus",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                models={[
                  {
                    text: "Popular Brands",
                    paragraph: "",
                    icon: "fas fa-car ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Toyota",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Honda",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Nissan",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Mitsubishi",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                />

                <MobileDropDown 
                
                name="Bikes"
                submenu={[
                  {
                    text: "Find Used Bikes",
                    paragraph: "Find your dream bike",
                    icon: "fas fa-search ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Used Bikes Listings",
                    paragraph: "Search from over 5000+ options",
                    icon: "fas fa-motorcycle ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Featured Used Bikes",
                    paragraph: "Browse our featured bikes",
                    icon: "fas fa-star ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Sell Your Bike",
                    paragraph: "Post a free ad and sell your bike quickly",
                    icon: "fas fa-tag ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Find New Bikes",
                    paragraph: "See new bikes in Pakistan",
                    icon: "fas fa-calculator ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Bike Comparisons",
                    paragraph: "Compare bikes and find their differences",
                    icon: "fas fa-yen-sign ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Bike Reviews",
                    paragraph: "Read reviews of all bikes in Pakistan",
                    icon: "fas fa-comments ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "New Bikes Prices",
                    paragraph: "See prices of new bikes",
                    icon: "fas fa-tag ms-2 me-4",
                    href: "/",
                  },
                ]}
                cities={[
                  {
                    text: "Popular New Bikes",
                    paragraph: "",
                    icon: "fas fa-motorcycle ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Honda 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki GS 150",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Yamaha YBR 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki GD 110",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Honda CG 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Hayabusa",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Yamaha FZ 150",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Intruder",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                models={[
                  {
                    text: "Popular New Bikes",
                    paragraph: "",
                    icon: "fas fa-motorcycle ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Honda 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki GS 150",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Yamaha YBR 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki GD 110",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Honda CG 125",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Hayabusa",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Yamaha FZ 150",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  {
                    text: "Suzuki Intruder",
                    paragraph: "",
                    icon: "",
                    href: "/",
                  },
                  
                ]}
                />
          <MobileDropDown 
                
                name="Auto Store"
                submenu={[
                  {
                    text: "PakWheels Autostore",
                    paragraph:
                      "Buy Auto Parts & Accessories directly from PakWheels",
                    icon: "fas fa-shop ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Find Auto Parts",
                    paragraph: "Find auto parts for your car",
                    icon: "fas fa-search ms-2 me-4",
                    href: "/",
                  },
                  {
                    text: "Sell Car Parts",
                    paragraph:
                      "Post a free ad and sell your car parts quickly",
                    icon: "fas fa-tag ms-2 me-4",
                    href: "/",
                  },
                ]}
                
                />
                 <a
                   href="#"
                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                 >
                   Videos
                 </a>
                 <a
                   href="#"
                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                 >
                   Forums
                 </a>
                 <a
                   href="#"
                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                   Blog
                 </a>
                 <MobileDropDown
                    name="More"
                    submenu={[
                      {
                        text: "Cool Rides",
                        paragraph: "Member Rides Cars & Bikes",
                        icon: "fas fa-thumbs-up ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Car Import",
                        paragraph: "Import your favourite Car",
                        icon: "fas fa-arrow-down ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Car Insurance",
                        paragraph:
                          "Post a free ad and sell your car parts quickly",
                        icon: "fas fa-umbrella ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Car Finance",
                        paragraph: "Compare plans and apply for car loan",
                        icon: "fas fa-dollar-sign ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "MTMIS Pakistan",
                        paragraph: "Online Vehicle Verification",
                        icon: "fas fa-check ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "DLIMS Pakistan",
                        paragraph: "Driving License Verification System",
                        icon: "fas fa-check ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Current Petrol Prices",
                        paragraph: "Check latest Petrol, Diesel and CNG Price",
                        icon: "fas fa-dollar-sign ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Pakwheels Partner Workshop",
                        paragraph: "Auto Repair Workshop",
                        icon: "fas fa-shop ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Car-registration-header",
                        paragraph:
                          "Car Registration Hassle-free Car Registration",
                        icon: "fas fa-tag ms-2 me-4",
                        href: "/",
                      },
                      {
                        text: "Car-ownership-transfer-header",
                        paragraph:
                          "Car Ownership Transfer Hassle-free Car Transfer",
                        icon: "fas fa-shop ms-2 me-4",
                        href: "/",
                      },
                    ]}
                  />
                 <MobileDropDown
                    className="btn btn-danger text-white"
                    name="Post an ads"
                    models={[
                      {
                        text: "Sell your car",
                        paragraph: "",
                        icon: "",
                        href: "/",
                      },
                      {
                        text: "Sell your bike",
                        paragraph: "",
                        icon: "",
                        href: "/",
                      },
                      {
                        text: "Sell your accessories",
                        paragraph: "",
                        icon: "",
                        href: "/",
                      },
                    ]}
                  />
          </div>
        </div>
      )}
    </nav>
    );
}
