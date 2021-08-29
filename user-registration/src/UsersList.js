import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
        { fname: "Phil", id: 0 },
        { fname: "Hagos", id: 1 },
    ]);
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
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            items.map(user => (
              <tr key={user.id}>
                <td>
                  {user.fname}
                </td>
                <td>
                  {user.lname}
                </td>
                <td>
                  {user.email}
                </td>
                <td>
                  {user.address}
                </td>
                <td>
                  <Link to={`/edit/${user.id}`}>Edit</Link>
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
