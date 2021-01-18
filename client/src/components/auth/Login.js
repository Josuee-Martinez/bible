import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";

const Login = ({ login, authenticated, setAlert }) => {
   const [user, setUser] = useState({
      email: "",
      password: "",
   });

   const { email, password } = user;

   const handleChange = (e) =>
      setUser({ ...user, [e.target.name]: e.target.value });

   const handleSubmit = (e) => {
      e.preventDefault();

      if (email === "") {
         setAlert("Please enter an email address", "error");
      } else if (password === "") {
         setAlert("Please enter a password", "error");
      } else {
         login({ user });
      }
   };

   if (authenticated) {
      return <Redirect to="/account" />;
   }

   return (
      <form className="form auth-form mt-4" onSubmit={handleSubmit}>
         <h3 className="text-center mb-4">
            <i className="fas fa-book"></i> My Bible
         </h3>
         <div className="form-group">
            <input
               type="email"
               id="email"
               name="email"
               className="form-control form-control-lg mb-4"
               value={email}
               onChange={handleChange}
               placeholder="Email"
            />
         </div>
         <div className="form-group">
            <input
               type="password"
               id="password"
               name="password"
               className="form-control form-control-lg mb-4"
               value={password}
               onChange={handleChange}
               placeholder="Password"
            />
         </div>
         <button
            type="submit"
            className="btn btn-primary btn-lg btn-block auth-btn mb-4"
         >
            Login!
         </button>
         <Link to="/signup" className="auth-link">
            Don't have an account?
         </Link>
      </form>
   );
};

const mapStateToProps = (state) => ({
   authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { login, setAlert })(Login);
