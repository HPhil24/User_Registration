import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const UserForm = ({ user }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { fname: user ? user.fname : "" },
  });
  const history = useHistory();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    history.push("/");
  });

  return (
    <div className="container">
      <div className="mt-5">
        <h3>
          <center>Edit User Profile</center>
        </h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">First Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your First Name"
              autoComplete="off"
              {...register("fname", { required: "Required" })}
            />
            <br></br>
            <label htmlFor="text">Last Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Last Name"
              autoComplete="off"
              {...register("lname", { required: "Required" })}
            />
            <br></br>
            <label htmlFor="text">Email:</label>
            <input
              className="form-control"
              type="email"
              name="description"
              id="description"
              placeholder="Enter your Email"
              autoComplete="off"
              {...register("description", { required: "Required" })}
            />
            <br></br>
            <label htmlFor="text">Address:</label>
            <input
              className="form-control"
              type="text"
              name="address"
              id="address"
              placeholder="Enter your Home Address"
              autoComplete="off"
              {...register("address", { required: "Required" })}
            />
            <br></br>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
