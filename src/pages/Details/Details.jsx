import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Details = () => {
   const datas = useLoaderData();
   const { id } = useParams();
   const dataid = parseInt(id);
   const data = datas.find((data) => data._id === dataid);

   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <div>
            <div className="hero bg-base-200 min-h-screen">
               <div className="hero-content flex-col lg:flex-row">
                  <img src={data.image} className="w-[800px] rounded-lg shadow-2xl" />
                  <div>
                     <h1 className="text-5xl font-bold">{data.estate_title}</h1>
                     <h2>Segment Name: {data.segment_name}</h2>
                     <p className="py-6">Description: {data.description}</p>
                     <h6>Location: {data.location}</h6>
                     <h6>Area: {data.area}</h6>
                     <div className="flex gap-1.5">
                        <h6>Facilities: </h6>
                        {data.facilities.map((facilities, _id) => (
                           <span key={_id}>
                              <p>{facilities},</p>
                           </span>
                        ))}
                     </div>
                     <h6>Price: {data.price}</h6>
                     <div className="card-actions justify-end">
                        <div className="badge badge-outline">Status: {data.status}</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Details;
