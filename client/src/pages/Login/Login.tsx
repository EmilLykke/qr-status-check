import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.scss";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import { ReactSession }  from 'react-client-session';



interface Inputs {
    username: string,
  password: string,
}

function Login() {
  const [inputs, setInputs] = useState<Inputs>({ username:"", password: "" });

  const [form, setForm] = useState<Inputs>({username: "", password: ""})

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    // axios.post("http://localhost:5000/users/login",form).then((res: { data: any; }) => console.log(res.data));
    const loginRes = await axios.post("http://localhost:5000/users/login",form);
    ReactSession.set('accessToken', loginRes.data.accessToken, { path: '/'})
    ReactSession.set('refreshToken', loginRes.data.refreshToken, {path: '/'})

    window.location.href = "/items";
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

export default Login;
