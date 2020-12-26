import React from "react";

const Signup = () => {
   return (
      <form className="form auth-form mt-4">
         <div class="form-group">
            <label for="email">Enter Email</label>
            <input type="text" id="email" class="form-control" />
         </div>
         <div class="form-group">
            <label for="password">Enter Password</label>
            <input type="text" id="password" class="form-control" />
         </div>
         <button type="submit" class="btn btn-primary">
            Sign up!
         </button>
      </form>
   );
};

export default Signup;
