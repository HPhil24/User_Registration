import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./api";

export const UsersList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const users = await getUsers()
      setItems(users)
    }
  fetchItems()
  }, []);

  return (
    <div className="container">
      <div className="mt-5">
        <h3>
          <center>Registered Users</center>
        </h3>
        <table className="table table-striped table-hover table-responsive table-dark">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>                           
              <th>Birthday</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Pronoun</th>
              <th>Email</th>
              <th>Number</th>
              <th>Address1</th>
              <th>Address2</th>
              <th>City</th> 
              <th>State</th>
              <th>Zipcode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            items.map(user => (
              <tr key={user._id}>
                <td>
                  {user.fname}
                </td>
                <td>
                  {user.mname}
                </td>
                <td>
                  {user.lname}
                </td>                
                <td>
                  {user.birthday}
                </td>
                <td>
                  {user.age}
                </td>
                <td>
                  {user.sex}
                </td>
                <td>
                  {user.pronoun}
                </td>
                <td>
                  {user.email}
                </td>
                <td>
                  {user.number}
                </td>
                <td>
                  {user.address1}
                </td>
                <td>
                  {user.address2}
                </td>
                <td>
                  {user.city}
                </td>
                <td>
                  {user.state}
                </td>
                <td>
                  {user.zipcode}
                </td>
                <td>
                  <Link to={`/edit/${user._id}`}>Edit</Link>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
