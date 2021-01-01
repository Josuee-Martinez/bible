import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../actions/auth";

const Navbar = ({ authenticated, loading, logout }) => {
   const authLinks = (
      <Fragment>
         <li className="nav-item active">
            <Link className="nav-link" to="/account">
               Account
            </Link>
         </li>

         <li className="nav-item active">
            <a className="nav-link" href="#!" onClick={logout}>
               <i className="fas fa-sign-out-alt"> </i> Logout
            </a>
         </li>
      </Fragment>
   );

   const guestLinks = (
      <Fragment>
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
      </Fragment>
   );
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
                  {authenticated ? authLinks : guestLinks}
               </ul>
            </div>
         </div>
      </nav>
   );
};

const mapStateToProps = (state) => ({
   authenticated: state.auth.authenticated,
   loading: state.auth.loading,
});

export default connect(mapStateToProps, { logout })(Navbar);
