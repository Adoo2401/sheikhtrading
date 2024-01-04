import { FaWarehouse, FaHandPaper } from "react-icons/fa";
import { FaShip } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
const Service = () => {
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-8 gap-6 py-24 px-12 items-center place-content-center justify-center">
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaShip className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Safety First</p>
        <p className="text-gray-600">
          Swift and secure express shipping options for urgent deliveries, prioritizing speed without compromising reliability
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaHandPaper className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Specialized Cargo Handling</p>
        <p className="text-gray-600">
          Expert handling of delicate, oversized, or specialized cargo, ensuring safe and secure transportation globally.
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaWarehouse className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Specialized Cargo Handling</p>
        <p className="text-gray-600">
        Expert handling of delicate, oversized, or specialized cargo, ensuring safe and secure transportation globally.
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <MdDashboardCustomize className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Customized Freight Forwarding</p>
        <p className="text-gray-600">
          Tailored freight solutions to meet your unique shipping needs, optimizing routes and modes for cost-effective delivery.
        </p>
      </div>
    </div>
  );
};
export default Service;
