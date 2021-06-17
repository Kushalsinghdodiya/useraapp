import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory, usehistory } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function CreateUser() {
  const [createUser, setCreateUser] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const history = useHistory();

  const handleInput = (e) => {
    const { name, value } = e.target;
    const account = { ...createUser };
    account[name] = value;
    setCreateUser(account);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let getdata = JSON.parse(localStorage.getItem("Udata"));
    const getdataCopy = [...getdata];
    getdataCopy.push(createUser);
    localStorage.setItem("Udata", JSON.stringify(getdataCopy));
    alert("User Created Successfully");
    history.replace("/");
  };

  return (
    <div className="container pt-5">
      <div className="text-center">
        <h1>CREATE DETAILS</h1>
      </div>
      <Form className="p-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={handleInput}
            type="email"
            placeholder="Enter Email"
            required
            value={createUser.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Id</Form.Label>
          <Form.Control
            name="id"
            onChange={handleInput}
            type="number"
            placeholder="Enter User Id"
            required
            value={createUser.id}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstname"
            onChange={handleInput}
            type="text"
            placeholder="Enter First Name"
            required
            value={createUser.firstname}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastname"
            onChange={handleInput}
            type="text"
            placeholder="Enter Last Name"
            value={createUser.lastname}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            onChange={handleInput}
            type="number"
            placeholder="Enter Phone"
            value={createUser.phone}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
