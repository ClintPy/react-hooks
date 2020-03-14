import React from "react";

// styled components from reactstrap
import {
  Jumbotron,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText
} from "reactstrap";

import "../App.css";

const LoginComponent = ({ login, setEmail, setPassword, error}) => {

  return (
    <>
      <Jumbotron className="App">
        <Form onSubmit={login} className="form">
          <Row>
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
          </Row>
          <Row>
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
          </Row>
          <Button color="success" type="submit" name="Login">
            Submit
          </Button>
        </Form>
      </Jumbotron>
    </>
  );
};

export default LoginComponent;
