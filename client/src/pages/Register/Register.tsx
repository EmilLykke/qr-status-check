import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Register.scss";

import sha256 from "crypto-js/sha256";
import axios from "axios";

interface Inputs {
    username: string,
  email: string,
  password: string,
}

function Register() {
  const [inputs, setInputs] = useState<Inputs>({ username:"", email: "", password: "" });

  const [form, setForm] = useState<Inputs>({username: "", email:"", password: ""})


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));


    let val: string;
    if(event.target.name === "password"){
      val = sha256(event.target.value).toString()
    } else{
      val = event.target.value;
    }
    setForm((form)=>({
      ...form,
      [event.target.name]: val,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // axios.post("http://localhost:5000/users/register",form).then((res: { data: any; }) => console.log(res.data));
    axios.post("http://localhost:5000/users/register",form);

    window.location.href = "/user/login";
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Enter username"
                name="username"
                value={inputs.username}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={inputs.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={inputs.password}
                onChange={handleInputChange}
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
