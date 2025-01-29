import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
const Header = () => {
   return (
      <div>
         <div className="flex items-center justify-around bg-white text-black">
            <div>
               <p className="font-bold text-3xl">
                  <span className="text-red-500 text-2xl">Good</span>
                  <br />
                  Home
               </p>
            </div>
            <div className="flex">
               <div className="flex items-center justify-center mr-10">
                  <div className="text-red-500 text-3xl mr-2">
                     <FaLocationDot />
                  </div>
                  <div>
                     <p>123 Homes Street</p>
                     <p>Chicago, IL 60606</p>
                  </div>
               </div>
               <div className="flex items-center justify-center">
                  <div className="text-red-500 text-3xl mr-2">
                     <FaPhoneAlt />
                  </div>
                  <div>
                     <p>234-356-2356</p>
                     <p>info@gmail.com</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
