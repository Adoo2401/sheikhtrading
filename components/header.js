import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
const header = () => {
  return (
    <div className=" h-screen w-full">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/home/home1.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="sm:text-7xl text-6xl text-white ">Premier Performance: International Scope</p>
                <p className="text-2xl font-light text-white ">
                  Pioneering First-Class Shipment Solutions Globally.
                </p>
                <button
                  type="button"
                  className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/home/home2.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white "> Supreme Standards: Global Reach</p>
                <p className="text-2xl font-light text-white ">
                Your First-Class Choice for Global Shipments
                </p>
                <button
                  type="button"
                  className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/home/home4.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white ">Elite Excellence: Worldwide Coverage</p>
                <p className="text-2xl font-light text-white ">
                Where Global Shipments Reach First-Class Heights.
                </p>
                <button
                  type="button"
                  className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default header;
