import React from 'react';
import SimpleLink from './SimpleLink';
import FooterLinksData from '../data/FooterLinksData';
import CityDataLinks from '../data/CityDataLinks';
import ExplorePakWheelsData from '../data/ExplorePakWheelsData';
import CarByColorData from '../data/CarByColorData';

export default function FooterUpperSide() {
    const [footerLinkData, setFooterLinkData] = React.useState(FooterLinksData.data.footerLink);
    const linkFooters = Array.isArray(footerLinkData) ? footerLinkData.map((values, index) => (
        <SimpleLink key={index} values={values} />
    )) : [];

    const [footerLinkCityData, setFooterLinkCityData] = React.useState(CityDataLinks.data.city);
    const linkFootersCity = Array.isArray(footerLinkCityData) ? footerLinkCityData.map((valuesCity, index) => (
        <SimpleLink key={index} values={valuesCity} />
    )) : [];

    const [footerLinkExplorePakWheelsData, setFooterLinkExplorePakWheelsData] = React.useState(ExplorePakWheelsData.data.explore);
    const linkFootersExplorePakWheels = Array.isArray(footerLinkExplorePakWheelsData) ? footerLinkExplorePakWheelsData.map((valuesExpPakWheels, index) => (
        <SimpleLink key={index} values={valuesExpPakWheels} />
    )) : [];

    return (
        <div className="bg-gray-900">
            <div className="container mx-auto py-5 px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
    <div className="text-start">
        <h6 className="text-gray-300 hover:bg-gray-700 hover:text-white">Car By Make</h6>
        <div className="py-3">
            {linkFooters}
        </div>
    </div>
    <div className="text-start">
        <h6 className="text-gray-300 hover:bg-gray-700 hover:text-white">Car By City</h6>
        <div className="py-3">
            {linkFootersCity}
        </div>
    </div>
    <div className="text-start">
        <h6 className="text-gray-300 hover:bg-gray-700 hover:text-white">Explore PakWheels</h6>
        <div className="py-3">
            {linkFootersExplorePakWheels}
        </div>
    </div>
    <div className="text-start">
        <h6 className="text-gray-300 hover:bg-gray-700 hover:text-white">Car By Category</h6>
        <div className="py-3">
            {linkFooters}
        </div>
    </div>
    <div className="text-start">
        <h6 className="text-gray-300 hover:bg-gray-700 hover:text-white">PakWheel.com</h6>
        <div className="py-3">
            {linkFooters}
        </div>
    </div>
    <div className="text-start">
        <h6 className="text-gray-300 hover:bg-gray-700 hover:text-white">Car By Color</h6>
        <div className="py-3">
            {linkFooters}
        </div>
    </div>
    <div className="text-start">
        <h6 className="text-gray-300 hover:bg-gray-700 hover:text-white">Car By Province</h6>
        <div className="py-3">
            {linkFooters}
        </div>
    </div>
    <div className="text-start">
        <h6 className="text-gray-300 hover:bg-gray-700 hover:text-white">Car By Body Type</h6>
        <div className="py-3">
            {linkFooters}
        </div>
    </div>
    <div className="text-start">
        <h6 className="text-gray-300 hover:bg-gray-700 hover:text-white">Sell On PakWheels</h6>
        <div className="py-3">
            {linkFooters}
        </div>
    </div>
    <div className="text-center flex flex-col justify-center items-center w-full">
        <h6 className="text-gray-300 hover:bg-gray-700 hover:text-white">Follow Us</h6>
        <div className="flex justify-center items-center flex-wrap py-3">
            <div className="faIcon_dev mx-1">
                <a href="https://www.facebook.com/" className="text-decoration-none text-white"><i className="fab fa-facebook iconFa"></i></a>
            </div>
            <div className="faIcon_dev mx-1">
                <a href="https://www.instagram.com/" className="text-decoration-none text-white"><i className="fab fa-instagram iconFa"></i></a>
            </div>
            <div className="faIcon_dev mx-1">
                <a href="https://www.twitter.com/" className="text-decoration-none text-white"><i className="fab fa-twitter iconFa"></i></a>
            </div>
            <div className="faIcon_dev mx-1">
                <a href="https://www.google.com/" className="text-decoration-none text-white"><i className="fab fa-google iconFa"></i></a>
            </div>
        </div>

        <div className="flex justify-center items-start flex-col my-3">
            <div className="flex justify-center flex-col items-center">
                <input type="text" placeholder="Enter your email" className="p-2 border border-gray-800 rounded-md w-full md:w-auto" />
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 w-full md:w-auto">Subscribe</button>
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    );
}
