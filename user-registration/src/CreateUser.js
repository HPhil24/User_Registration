import React from "react";
import { UserForm } from "./UserForm";

export const CreateUser = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="container">
      <div className="mt-5">
        <h3>
          <center>Create User Profile</center>
        </h3>
        <UserForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
