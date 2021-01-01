import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({
   component: Component,
   authenticated,
   loading,
   ...rest
}) => (
   <Route
      {...rest}
      render={(props) =>
         !authenticated && !loading ? (
            <Redirect to="/" />
         ) : (
            <Component {...props} />
         )
      }
   />
);

const mapStateToProps = (state) => ({
   authenticated: state.auth.authenticated,
   loading: state.auth.loading,
});

export default connect(mapStateToProps)(ProtectedRoute);
