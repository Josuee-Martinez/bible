import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";

const Login = ({ login, authenticated }) => {
   const [user, setUser] = useState({
      email: "",
      password: "",
   });

   const { email, password } = user;

   const handleChange = (e) =>
      setUser({ ...user, [e.target.name]: e.target.value });

   const handleSubmit = (e) => {
      e.preventDefault();
      login({ user });
   };

   if (authenticated) {
      return <Redirect to="/account" />;
   }

   return (
      <form className="form auth-form mt-4" onSubmit={handleSubmit}>
         <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
               type="text"
               id="email"
               name="email"
               className="form-control"
               value={email}
               onChange={handleChange}
            />
         </div>
         <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
               type="text"
               id="password"
               name="password"
               className="form-control"
               value={password}
               onChange={handleChange}
            />
         </div>
         <button type="submit" className="btn btn-primary">
            Log In!
         </button>
      </form>
   );
};

const mapStateToProps = (state) => ({
   authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { login })(Login);
