import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../Firebase/config";

import "../App.css"

const Nav = props => {
  const [userState, setuserState] = useState(null);

  useEffect(() => {
    firebase.getUserState().then(user => {
      if (user) {
        setuserState(user);
      }
    });
  });

  const logout = () => {
    //Logout the user
    firebase.logOut();
    setuserState(null);
    props.history.replace("/login");
  };

  let buttons;

  if (userState != null) {
    buttons = (
      <React.Fragment>
        <li>
          <button className="btn waves-effect waves-light" onClick={logout}>
            LogOut
          </button>
        </li>
      </React.Fragment>
    );
  } else {
    buttons = (
      <React.Fragment>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
      </React.Fragment>
    );
  }

  return (
    <nav className="set_nav">
      <div className="nav-wrapper">
        <ul>
          <li>
            <Link to="/">ReactFirebaseHooks</Link>
          </li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/create">New Post</Link>
          </li>
          {buttons}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
