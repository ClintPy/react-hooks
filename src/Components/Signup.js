import React, { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";

import firebase from "../Firebase/config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [routeRedirect, setRedirect] = useState(false);

  const signUp = async e => {
    e.preventDefault();
    let user = await firebase.signUp(email, password);
    console.log(user);
    setRedirect(true);
  };

  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <div className="set_top_margin">
        <form onSubmit={signUp}>
          <h2>Create a New Account</h2>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />

          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="Login"
          >
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default withRouter(SignUp);
