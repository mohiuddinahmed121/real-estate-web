import Header from "../../pages/Shared/Header/Header";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const Login = () => {
   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <div>
            <div className="hero bg-white min-h-screen">
               <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                     <h1 className="text-5xl font-bold text-black">Login now!</h1>
                     <p className="py-6 text-black font-bold">
                        Get back to your account and discover what is new. <br /> Your secure
                        gateway to all our services awaits you.
                     </p>
                  </div>
                  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                     <div className="card-body">
                        <fieldset className="fieldset">
                           <label className="fieldset-label">Email</label>
                           <input type="email" className="input" placeholder="Email" />
                           <label className="fieldset-label">Password</label>
                           <input type="password" className="input" placeholder="Password" />
                           <div>
                              <a className="link link-hover">Forgot password?</a>
                           </div>
                           <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
