import { Link } from "react-router-dom";

const Estate = ({ data }) => {
   const { estate_title, segment_name, status, image, _id } = data;
   return (
      <div className="">
         <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure className="w-[400px] h-[400px]">
               <img src={image} alt="Album" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{estate_title}</h2>
               <p>Segment name: {segment_name}</p>
               <div className="card-actions justify-end">
                  <div className="badge badge-outline">Status: {status}</div>
               </div>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                     <Link to={`/data/${_id}`}>View Property</Link>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Estate;
