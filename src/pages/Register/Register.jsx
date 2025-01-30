import { Link } from "react-router-dom";
import Header from "../../pages/Shared/Header/Header";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const Register = () => {
   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <div>
            <h2 className="text-3xl my-6 ml-96">Please Register</h2>
            <form className="card-body md:w-3/4 lg:w-1/2 mx-auto">
               <div className="form-control">
                  <label className="label mb-1">
                     <span className="label-text">Name</span>
                  </label>
                  <br />
                  <input
                     type="text"
                     placeholder="name"
                     className="input input-bordered"
                     name="name"
                     required
                  />
               </div>
               <div className="form-control">
                  <label className="labe mb-1">
                     <span className="label-text">Photo URL</span>
                  </label>
                  <br />
                  <input
                     type="text"
                     placeholder="photo"
                     className="input input-bordered"
                     name="photo"
                     required
                  />
               </div>
               <div className="form-control">
                  <label className="label mb-1">
                     <span className="label-text">Email</span>
                  </label>
                  <br />
                  <input
                     type="email"
                     placeholder="email"
                     className="input input-bordered"
                     name="email"
                     required
                  />
               </div>
               <div className="form-control">
                  <label className="label mb-1">
                     <span className="label-text">Password</span>
                  </label>
                  <br />
                  <input
                     type="password"
                     placeholder="password"
                     className="input input-bordered"
                     name="password"
                     required
                  />
                  <br />
                  <label className="label">
                     <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                     </a>
                  </label>
               </div>
               <div className="form-control mt-3">
                  <button className="btn btn-primary">Register</button>
               </div>
            </form>
            <p className="ml-96 mb-8">
               Already have an account ?
               <Link className="text-blue-600 font-bold" to="/login">
                  Login
               </Link>
            </p>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Register;
