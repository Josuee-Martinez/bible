import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";

const Signup = ({ signup, authenticated }) => {
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
      signup({ user });
   };

   if (authenticated) {
      return <Redirect to="/account" />;
   }

   return (
      <form className="form auth-form mt-4 form-info" onSubmit={handleSubmit}>
         <div class="form-group">
            <label for="email">Enter Email:</label>
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
            <label for="username">Enter Username:</label>
            <input
               type="text"
               id="username"
               name="username"
               class="form-control"
               value={username}
               onChange={handleChange}
            />
         </div>
         <div class="form-group">
            <label for="password">Enter Password:</label>
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
            Sign up!
         </button>
      </form>
   );
};

const mapStateToProps = (state) => ({
   authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
