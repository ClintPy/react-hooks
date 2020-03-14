import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav as Navigation,
  NavItem,
  NavLink,
} from "reactstrap";
import firebase from "../Firebase/config";

import "../App.css";

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
      <>
          <Button color="danger" onClick={logout}>
            LogOut
          </Button>
      </>
    );
  } else {
    buttons = (
      <>
        <NavLink>
          <Link to="/signup">Sign Up</Link>
        </NavLink>
        <NavLink>
          <Link to="/login">LogIn</Link>
        </NavLink>
      </>
    );
  }

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Recipe App</NavbarBrand>
      <Navigation className="m-auto" navabar>
        <NavItem>
          <NavLink>
            {userState ? <Link to="/create">New Post</Link> : null}
          </NavLink>
        </NavItem>
      </Navigation>
      {buttons}
    </Navbar>
  );
};

export default withRouter(Nav);
