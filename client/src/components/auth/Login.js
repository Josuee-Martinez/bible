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
      if (user.password === "josue") {
         setAlert("kkk", "danger");
      }
      console.log(user.password);
      login({ user });
   };

   if (authenticated) {
      return <Redirect to="/account" />;
   }

   return (
      <form className="form auth-form mt-4" onSubmit={handleSubmit}>
         <div className="form-group">
            {/* <label htmlFor="email">Enter Email</label> */}
            <input
               type="text"
               id="email"
               name="email"
               className="form-control form-control-lg mb-4"
               value={email}
               onChange={handleChange}
               placeholder="Email"
            />
         </div>
         <div className="form-group">
            {/* <label htmlFor="password">Enter Password</label> */}
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
