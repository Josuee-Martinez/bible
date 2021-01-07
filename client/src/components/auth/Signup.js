import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";

const Signup = ({ signup, authenticated, setAlert }) => {
   const [user, setUser] = useState({
      email: "",
      username: "",
      password: "",
   });

   const { email, username, password } = user;

   const handleChange = (e) =>
      setUser({ ...user, [e.target.name]: e.target.value });

   const handleSubmit = (e) => {
      e.preventDefault();

      if (email === "") {
         setAlert("Enter an email address", "error");
      } else if (username === "") {
         setAlert("Choose a username", "error");
      } else if (password === "") {
         setAlert("Choose a password", "error");
      } else {
         signup({ user });
      }
   };

   if (authenticated) {
      return <Redirect to="/account" />;
   }

   return (
      <form className="form auth-form mt-4 form-info" onSubmit={handleSubmit}>
         <div className="form-group">
            {/* <label htmlFor="email">Enter Email:</label> */}
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
            {/* <label htmlFor="username">Enter Username:</label> */}
            <input
               type="text"
               id="username"
               name="username"
               className="form-control form-control-lg mb-4"
               value={username}
               onChange={handleChange}
               placeholder="Username"
            />
         </div>
         <div className="form-group">
            {/* <label htmlFor="password">Enter Password:</label> */}
            <input
               type="password"
               id="password"
               name="password"
               className="form-control form-control-lg input-info mb-4"
               value={password}
               onChange={handleChange}
               placeholder="Password"
            />
         </div>
         <button
            type="submit"
            className="btn btn-primary btn-lg btn-block auth-btn mb-4"
         >
            Signup!
         </button>
         <Link to="/login" className="auth-link">
            Already have an account?
         </Link>
      </form>
   );
};

const mapStateToProps = (state) => ({
   authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { signup, setAlert })(Signup);
