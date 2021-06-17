import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function UserList() {
  const [list, setlist] = useState([]);
  const [notify, setnotify] = useState(false);
  const history = useHistory();

  const data = [
    {
      id: "1",
      firstname: "Rahul",
      lastname: "singh",
      email: "abc@gmail.com",
      phone: "918871873812",
    },

    {
      id: "2",
      firstname: "paul",
      lastname: "vvvvvv",
      email: "sadasdasd@gmail.com",
      phone: "875465465465465",
    },

    {
      id: "3",
      firstname: "raju",
      lastname: "aaaa",
      email: "rewrewrw@gmail.com",
      phone: "45454545454",
    },
    {
      id: "4",
      firstname: "Rahul",
      lastname: "sfdsf",
      email: "werwerwer@gmail.com",
      phone: "787878787878",
    },
    {
        id: "5",
        firstname: "Bjorn",
        lastname: "Lothbrok",
        email: "bjorn@gmail.com",
        phone: "67786786876786",
      },

      {
        id: "6",
        firstname: "Ragnar",
        lastname: "Lothbrok",
        email: "Ragnar@gmail.com",
        phone: "787878787787",
      },
  ];
  
 

  useEffect(() => {
     localStorage.setItem("Udata", JSON.stringify(data));
    let getdata = localStorage.getItem("Udata");
    setlist(JSON.parse(getdata));
  }, []);

  const handleEdit = (e, uid) => {
    e.preventDefault();
    history.push(`/userdetails/${uid}`);
  };

  const removeItem = (e, uid) => {
    e.preventDefault();
    setnotify(true);
    let filterd = list.filter((list) => list.id !== uid).map((d) => d);
    setlist(filterd);
    localStorage.setItem("Udata", JSON.stringify(filterd));
  };

  const getData = () => {
    localStorage.setItem("Udata", JSON.stringify(data));
    let getdata = localStorage.getItem("Udata");
    setlist(JSON.parse(getdata));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    history.push("/createuser");
  };

  return (
    <div className="container">
      

      <div className="row m-3">
        <div className="col-sm-6 text-center">
          <Button variant="primary" onClick={getData}>
            Get Orignal Date
          </Button>
        </div>

        <div className="col-sm-6 text-center">
          <Button variant="primary" onClick={handleCreate}>
            Create User
          </Button>
        </div>
      </div>

      {notify && (
        <Alert
          onClose={() => setnotify(false)}
          dismissible
          variant="success"
          className="text-center"
        >
          User Deleted Successfully!!!!
        </Alert>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={(e) => handleEdit(e, item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={(e) => removeItem(e, item.id)}
                    variant="danger"
                    className="ml-4"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
