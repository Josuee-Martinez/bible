import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark">
         <div className="container">
            <Link className="navbar-brand" to="/">
               MyBible
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                     <Link className="nav-link" to="/signup">
                        Signup
                     </Link>
                  </li>
                  <li className="nav-item active">
                     <Link className="nav-link" to="/login">
                        Login
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
