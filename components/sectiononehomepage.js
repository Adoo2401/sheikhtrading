import { FaHashtag } from "react-icons/fa";
import Image from "next/image";
import Image1 from "../public/image_01-6.jpg";
import Image2 from "../public/image_01-5.jpg";
import Image3 from "../public/image_10-1.jpg";
import Image4 from "../public/image_10-2.jpg";
import service2 from '../public/services/service2.jpg'
import service1 from '../public/services/service1.jpg'
import service3 from '../public/services/service3.jpg'
import Image5 from "../public/image_03-2.jpg";
const Contents = () => {
  return (
    <div className="container mx-auto py-24  space-y-20 w-full">
      <div className=" lg:flex lg:flex-row justify-center px-12">
        <div>
          <Image src={Image1} alt="Picture of the author" />
        </div>
        <div className="mt-12">
          <Image src={Image2} alt="Picture of the author" />
        </div>
      </div>
      <div className="px-12 flex flex-col justify-center items-center text-center space-y-6">
        <FaHashtag className="w-12 h-12 text-amber-600  p-1" />
        <p className="text-3xl font-light text-gray-600">
        My mission is to empower businesses worldwide by providing top-notch shipment trading solutions. We believe in the transformative power of efficient logistics to drive international trade, 
          <br />
          and we are committed to being the catalyst for success in the global marketplace.
        </p>
        <p className="text-xl text-gray-500">Sheikh Jameel - CHAIRMAN CEO</p>
      </div>
      <div className="lg:grid lg:grid-cols-2 px-12">
        <div className="col-span-1 space-y-6 py-12 text-center px-8">
          <p className="text-3xl font-medium text-gray-600">
            Exceptional Customer Service
          </p>
          <p className="text-2xl font-light text-gray-500">
            We prioritize clear communication, transparency, and proactive problem-solving. At our core, we view each interaction with our clients as an opportunity to exceed expectations. Your success is our success, and we strive to make every customer experience with us seamless, reliable, and memorable.
          </p>
          <button
            type="button"
            className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-2">
            <Image src={service2} alt="Service 1" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={service1} alt="Service 2" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={service3} alt="Service 3" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contents;
