import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const CreateUser = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory()

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    history.push("/")
  });
  return (
    <div className="container">
      <div className="mt-5">
        <h3>
          <center>User Registration</center>
        </h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              {...register("text", { required: "Required" })}
            />
            <br></br>
            <label htmlFor="text">Email:</label>
            <input
              className="form-control"
              type="email"
              name="description"
              id="description"
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
