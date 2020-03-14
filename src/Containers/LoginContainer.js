import React, { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";

// styled components from reactstrap
import { Container, Row, Col } from "reactstrap";

// Firebase
import firebase from "../Firebase/config";

// Loader
import Loader from "../Components/Loader";

// Login Component
import LoginComponent from "../Components/LoginComponent";

import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [routeRedirect, setRedirect] = useState("");

  const login = async e => {
    e.preventDefault();
    setLoading(true);
    let response = await firebase.login(email, password);
    if (response.hasOwnProperty("message")) {
      // console.log(response.message);
      errorLogin(response.message);
      setLoading(false);
    }
    if (response.hasOwnProperty("user")) {
      // console.log(response.user);
      setLoading(true);
      setRedirect(true);
    }
  };

  const errorLogin = Errmessage => {
    setError(Errmessage);
  };

  const redirect = routeRedirect;

  if (redirect) {
    return <Redirect to="/" />;
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Row>
        <Col xs="7">One</Col>
        <Col xs="5">
          <LoginComponent
            login={login}
            setEmail={setEmail}
            setPassword={setPassword}
            error={error}
            onLoad={() => setLoading(true)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Login);
