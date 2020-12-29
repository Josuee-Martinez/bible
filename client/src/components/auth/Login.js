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
         <div class="form-group">
            <label for="email">Enter Email</label>
            <input
               type="text"
               id="email"
               name="email"
               class="form-control"
               value={email}
               onChange={handleChange}
            />
         </div>
         <div class="form-group">
            <label for="password">Enter Password</label>
            <input
               type="text"
               id="password"
               name="password"
               class="form-control"
               value={password}
               onChange={handleChange}
            />
         </div>
         <button type="submit" class="btn btn-primary">
            Log In!
         </button>
      </form>
   );
};

const mapStateToProps = (state) => ({
   authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { login })(Login);
