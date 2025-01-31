import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);

   const handleSignOut = () => {
      logOut().then().catch();
   };

   const navLinks = (
      <>
         <li>
            <NavLink to="/">Home</NavLink>
         </li>
         <li>
            <NavLink to="/notFound">Update Profile</NavLink>
         </li>
         <li>
            <NavLink to="/profile">User Profile</NavLink>
         </li>
         <li>
            <NavLink to="/register">Register</NavLink>
         </li>
      </>
   );
   return (
      <div className="navbar bg-white text-black">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold text-2xl"
               >
                  {navLinks}
               </ul>
            </div>
         </div>
         <div className="navbar-center hidden lg:flex font-bold text-2xl">
            <ul className="menu menu-horizontal px-1 font-bold">{navLinks}</ul>
         </div>
         <div className="navbar-end">
            {user ? (
               <button onClick={handleSignOut} className="btn">
                  Logout
               </button>
            ) : (
               <Link to="/login">
                  <button className="btn">Login</button>
               </Link>
            )}
         </div>
         <hr />
      </div>
   );
};

export default Navbar;
