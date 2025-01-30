import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const NotFound = () => {
   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <div className="text-center mt-56 mb-56">
            <p className="text-3xl font-bold">404 Error</p>
            <p>Page not found..!!!</p>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default NotFound;
