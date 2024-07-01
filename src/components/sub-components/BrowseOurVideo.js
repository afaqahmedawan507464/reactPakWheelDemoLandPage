import React from 'react';
import SmallVideoCard from './SmallVideoCard';
import LargeCardVide from './LargeCardVide';
import SmallVideoCardData from '../data/SmallVideoCardData';
import LargeVideoCardData from '../data/LargeVideoCardData';

export default function BrowseOurVideo() {
    const [largeVideo, setLargeVideo] = React.useState(LargeVideoCardData.data.videosDataLarge);
    const [smallVideos, setSmallVideos] = React.useState(SmallVideoCardData.data.videosDataSmall);
    
    const videoLarge = Array.isArray(largeVideo) ? largeVideo.map((cardCityDataValue, index) => (
        <LargeCardVide key={index} values={cardCityDataValue} />
    )) : [];

    const videoSmall = Array.isArray(smallVideos) ? smallVideos.map((video, index) => (
        <SmallVideoCard key={index} values={video} />
    )) : [];

    return (
        <div className="container-fluid py-3 bg-gray-100">
            <div className="container py-5 px-5">
                <div className="flex justify-between items-center my-2">
                    <div className="text-start">
                        <h3 className="text-2xl font-bold">Browse Our Videos</h3>
                    </div>
                    <div className="text-end">
                        <a href="#" className="text-blue-500 hover:underline">View All Videos</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-3">
                    <div className="p-3">
                        {videoLarge}
                    </div>
                    <div className="p-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {videoSmall}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
