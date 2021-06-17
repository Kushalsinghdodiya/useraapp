import React, { useEffect, useState } from "react";
import { useHistory, usehistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
export default function UserDetail({ match, location }) {
  const lasturlvalue = match.params.id;
  const [currentUser, setCurrentUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const history = useHistory();

  useEffect(() => {
    getSingleUser();
  }, []);

  const getSingleUser = () => {
    console.clear();
    let getdata = JSON.parse(localStorage.getItem("Udata"));
    let singleUser = getdata
      .filter((list) => list.id === lasturlvalue)
      .map((d) => d);

    setCurrentUser(...singleUser);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    const account = { ...currentUser };
    account[name] = value;
    setCurrentUser(account);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let getdata = JSON.parse(localStorage.getItem("Udata"));
    const getdataCopy = [...getdata];
    const targetIndex = getdataCopy.findIndex((f) => f.id == lasturlvalue);
    getdataCopy[targetIndex] = currentUser;
    localStorage.setItem("Udata", JSON.stringify(getdataCopy));
    alert("User Data Updated Successfully");
    history.replace("/");
  };

  return (
    <div className="container pt-5">
      <div className="text-center">
        <h1>UPDATE DETAILS</h1>
      </div>
      <Form className="p-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={currentUser.email}
            name="email"
            onChange={handleInput}
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={currentUser.firstname}
            name="firstname"
            onChange={handleInput}
            type="text"
            placeholder="Enter First Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={currentUser.lastname}
            name="lastname"
            onChange={handleInput}
            type="text"
            placeholder="Enter Last Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={Number(currentUser.phone)}
            name="phone"
            onChange={handleInput}
            type="number"
            placeholder="Enter Phone"
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
