import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Profile = ({ children }) => {
   const { user } = useContext(AuthContext);
   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <div className="mt-20 mb-52">
            <h1 className="ml-96 font-black text-3xl mb-11">Profile Details</h1>
            <div className="ml-96 text-xl">
               <img src={user.photoURL} />
               <p>User Name: {user.displayName}</p>
               <p>User Email: {user.email}</p>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Profile;
