import React from 'react';

export default function GetPakWheelApp() {
  return (
    <div className="bg-white py-3">
      <div className="container mx-auto py-5 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <h1 className="text-3xl font-bold">Get The PakWheels App</h1>
            <p className="mt-4 text-lg">Buy & Sell Cars, Bikes and Auto Parts faster and better using our App</p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="col-span-1">
                <div className="picPlayStore">
                  <img src="https://wsa4.pakwheels.com/assets/google-play-badge-f4bed6cbd8a3a1be7c79377c4441447a.svg" alt="Google Play Store" />
                </div>
              </div>
              <div className="col-span-1">
                <div className="picPlayStore">
                  <img src="https://wsa1.pakwheels.com/assets/app-store-badge-4d05ff70e5546f31e3891739ea40abad.svg" alt="App Store" />
                </div>
              </div>
              <div className="col-span-1">
                <div className="picPlayStore">
                  <img src="https://wsa4.pakwheels.com/assets/huawei-store-badge-7ad06f9ffe74b644d49c6221af98f5b3.svg" alt="Huawei App Gallery" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 my-1 px-3">
            <span className="block mb-4">Scan the QR to get the App</span>
            <div className="flex justify-center items-center">
              <div className="getPakWheelAppImageDiv">
                <img src="https://wsa3.pakwheels.com/assets/promotion-app/app-install-qr-code-281c1dc2396c1735eadfe5f80c020673.svg" alt="QR Code" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
