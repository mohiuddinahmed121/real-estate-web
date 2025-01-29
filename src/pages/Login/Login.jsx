import { Link } from "react-router-dom";
import Header from "../../pages/Shared/Header/Header";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const Login = () => {
   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <div>
            <div className="">
               <h2 className="text-3xl my-10 text-center">Please Login</h2>
               <form className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                  <div className="form-control ml-48">
                     <label className="label mb-2">
                        <span className="label-text">Email</span>
                     </label>
                     <br />
                     <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered mb-3"
                        name="email"
                        required
                     />
                  </div>
                  <div className="form-control ml-48">
                     <label className="label mb-2">
                        <span className="label-text">Password</span>
                     </label>
                     <br />
                     <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered mb-3"
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
                  <div className="form-control mt-6 text-center">
                     <button className="btn btn-primary">Login</button>
                  </div>
               </form>
               <p className="text-center mt-4">
                  Don not have an account{" "}
                  <Link className="text-blue-600 font-bold" to="/register">
                     Register
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Login;
