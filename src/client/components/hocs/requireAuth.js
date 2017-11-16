import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// auth hoc to protect routes like admins page
export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          // redirect
          return <Redirect to="/" />;
        case null:
          // not yet fetched users state
          return <div>Loading..</div>;
        default:
          // user is authed
          return <ChildComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};
