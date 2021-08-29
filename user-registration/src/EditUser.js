import React, { useState, useEffect } from "react";
import { UserForm } from "./UserForm";

export const EditUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser({
      fname: "Phil",
    });
  }, []);

  const onSubmit = (data) => {
      alert(JSON.stringify(data))
  }

  return user ? (
    <div className="container">
      <div className="mt-5">
        <h3>
          <center>Edit User Profile</center>
        </h3>
        <UserForm user={user} onSubmit={onSubmit}/>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
