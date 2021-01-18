import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../actions/auth";

const Navbar = ({ authenticated, loading, logout }) => {
   const authLinks = (
      <Fragment>
         <li className="nav-item active">
            <Link className="nav-link" to="/account">
               <i className="fas fa-bookmark"></i> Verses
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
      <nav className="navbar navbar-expand navbar-dark">
         <div className="container">
            <Link className="navbar-brand" to="/">
               <i className="fas fa-book"></i> My Bible
            </Link>

            <ul className="navbar-nav ml-auto">
               {authenticated ? authLinks : guestLinks}
            </ul>
         </div>
      </nav>
   );
};

const mapStateToProps = (state) => ({
   authenticated: state.auth.authenticated,
   loading: state.auth.loading,
});

export default connect(mapStateToProps, { logout })(Navbar);
