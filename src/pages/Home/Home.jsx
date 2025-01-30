import Navbar from "../../pages/Shared/Navbar/Navbar";
import Header from "../../pages/Shared/Header/Header";
import Banner from "../../pages/Banner/Banner";
import Footer from "../../pages/Shared/Footer/Footer";
import Estate from "../../pages/Estate/Estate";
import { useLoaderData } from "react-router-dom";

const Home = () => {
   const data = useLoaderData();
   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <Banner></Banner>
         <div className="grid grid-cols-2 mt-12 mb-12 gap-10 mx-1">
            {data.map((adata) => (
               <Estate key={adata._id} data={adata}></Estate>
            ))}
         </div>

         <Footer></Footer>
      </div>
   );
};

export default Home;
