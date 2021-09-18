import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export const UsersList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getUsersList();
  }, []);

  function getUsersList() {
    const fetchItems = async () => {
      const users = await getUsers();
      setItems(users);
    };
    fetchItems();
  }

  const userDelete = (id) => {
    fetch(`http://localhost:4000/${id}`, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then((resp) => {
        console.warn(resp);
        getUsersList();
      });
      Swal.fire({
        icon: 'warning',
        title: 'User will be deleted',
        text: 'Clicking the delete icon will remove the user from the database',
      })
  };

  return (
    <div className="container">
      <div className="mt-5">
        <h3>Registered Users</h3>
        <br></br>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-light">
            <thead>
              <tr className="table-dark">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birthday</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Pronoun</th>
                <th>Email</th>
                <th>Number</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zipcode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((user) => (
                <tr key={user._id}>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.birthday}</td>
                  <td>{user.age}</td>
                  <td>{user.sex}</td>
                  <td>{user.pronoun}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>{user.address1}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td>{user.zipcode}</td>
                  <td>
                    <Link to={`/edit/${user._id}`}>
                      <button className="btn btn-outline-success btn-sm" data-toggle="tooltip" data-placement="top" title="Edit">
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faEdit}
                        />
                      </button>
                    </Link>
                    <button className="btn btn-outline-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Delete">
                      <FontAwesomeIcon
                        className="font-awesome"
                        icon={faTrash}
                        onClick={() => userDelete(user._id)}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
