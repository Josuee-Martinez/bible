import React from "react";
import { connect } from "react-redux";

const Account = ({ authenticated, user }) => {
   console.log(authenticated);
   return <div>{user === null ? "" : user.username}</div>;
};

const mapStateToProps = (state) => ({
   authenticated: state.auth.authenticated,
   user: state.auth.user,
});

export default connect(mapStateToProps)(Account);
