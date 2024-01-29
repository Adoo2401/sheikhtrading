import MapSection from "../components/map";


const Contact = () => {
  return (
    <div>
      {/* Content */}
      <div>
        <MapSection />
        <div className="lg:grid lg:grid-cols-2">
          <div className="col-span-1 p-24 flex flex-col space-y-8">
            <p className="text-2xl text-gray-600">
              Yiwu Sheikh Trading <br />
              Shipment Services
            </p>
            <p className="text-xl font-light text-gray-500">
              Unit 3 Building#65, District 3
              <br />  jiangnan, Yiwu
            </p>
            <p className="text-xl font-light text-gray-500">
              Phone: (+86) 579 899 693 33<br />
  
            </p>
            <p className="text-xl font-light text-gray-500">
              Email: 2596980473@qq.com
            </p>
          </div>
          <div className="col-span-1 bg-gray-100 p-24 flex flex-col space-y-8">
            <p className="text-2xl text-gray-600">Chairman of the Board</p>
            <p className="text-xl font-light text-gray-500">
              Sheikh Jameel
              <br /> Phone: (+86) 579 899 693 33 <br />
              Email: 2596980473@qq.com
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  space-y-4 py-24">
          <p className="text-3xl text-center font-light text-gray-600">
            Private chauffeur, sightseeing tour? <br />
            Please fill out the form below with questions or comments
          </p>
          <div className=" container mx-auto px-16 lg:grid  lg:grid-cols-2 lg:grid-rows-3   w-full">
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="text-gray-900  block w-full p-2.5 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="col-span-1 row-span-3 p-4  border">
              <label htmlFor="message" className="block mb-2  text-gray-900 ">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-gray-900  "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className=" text-gray-900 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="col-span-1 row-span-1 p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="  text-gray-900 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
          </div>
          <button
            type="button"
            className=" text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button>
        </div>
      </div>
      {/* End of Content */}
    </div>
  );
};
export default Contact;
