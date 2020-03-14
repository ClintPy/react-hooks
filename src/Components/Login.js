import React, { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";

// styled components from reactstrap
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
} from "reactstrap";

// Firebase
import firebase from "../Firebase/config";

// Loader
import Loader from "./Loader";

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
    <Container className="App">
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Form onSubmit={login} className="form">
        <Col>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              name="password"
              placeholder="********"
              onChange={e => setPassword(e.target.value)}
            />
            {error ? (
              <FormText color="danger">Invalid email or password!</FormText>
            ) : null}
          </FormGroup>
        </Col>
        <Button color="success" type="submit" name="Login">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(Login);
