import React from "react";
import { useForm } from "react-hook-form";

export const UserForm = ({ user, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fname: user ? user.fname : "",
      mname: user ? user.mname : "",
      lname: user ? user.lname : "",
      birthday: user ? user.birthday : "",
      age: user ? user.age : "",
      sex: user ? user.sex : "",
      pronoun: user ? user.pronoun : "",
      email: user ? user.email : "",
      number: user ? user.number : "",
      address1: user ? user.address1 : "",
      address2: user ? user.address2 : "",
      city: user ? user.city : "",
      state: user ? user.state : "",
      zipcode: user ? user.zipcode : "",
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <div className="container">
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <br></br>
        <div className="row">
          <div className="col-sm-2 offset-md-3">
            <label htmlFor="text">First Name</label>
            <input
              className="form-control"
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              autoComplete="off"
              {...register("fname", { required: "Required" })}
            />
          </div>
          <div className="col-sm-2">
            <label htmlFor="text">Middle Name</label>
            <input
              className="form-control"
              type="text"
              name="mname"
              id="mname"
              placeholder="Middle Name"
              autoComplete="off"
              {...register("mname",)}
            />
          </div>
          <div className="col-sm-2">
            <label htmlFor="text">Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              autoComplete="off"
              {...register("lname", { required: "Required" })}
            />
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-sm-3 offset-md-3">
            <label htmlFor="birthday">Birthday</label>
            <input
              placeholder="Birthday"
              className="form-control"
              type="date"
              name="birthday"
              id="birthday"
              autoComplete="off"
              {...register("birthday", {
                required: "Required",
              })}
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="age">Age</label>
            <input
              placeholder="Age"
              className="form-control"
              type="number"
              min="18"
              max="80"
              name="age"
              id="age"
              autoComplete="off"
              {...register("age", {
                required: "Required",
              })}
            />
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-sm-3 offset-md-3">
            <label htmlFor="sex">Sex</label>
            <select
              className="form-control"
              name="age"
              id="sex"
              {...register("sex", {
                required: "Required",
              })}
            >
              <option value="" disabled selected>
                Choose option
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="pronoun">Preferred Pronoun</label>
            <select
              className="form-control"
              name="pronoun"
              id="pronoun"
              {...register("pronoun", {
                required: "Required",
              })}
            >
              <option value="" disabled selected>
                Choose option
              </option>
              <option value="He/Him/His">He/Him/His</option>
              <option value="She/Her">She/Her</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm-3 offset-md-3">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              {...register("email", { required: "Required" })}
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="number">Phone Number</label>
            <input
              className="form-control"
              type="tel"
              name="number"
              id="number"
              placeholder="09XX-XXXX-XXX"
              pattern="[0-9]{4}-[0-9]{4}-[0-9]{3}"
              autoComplete="off"
              {...register("number", {
                required: "Required",
              })}
            />
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-sm-3 offset-md-3">
            <label htmlFor="address">Address 1</label>
            <input
              className="form-control"
              type="text"
              name="address1"
              id="address1"
              placeholder="Address 1"
              autoComplete="off"
              {...register("address1", { required: "Required" })}
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="address">Address 2</label>
            <input
              className="form-control"
              type="text"
              name="address2"
              id="address2"
              placeholder="Address 2"
              autoComplete="off"
              {...register("address2")}
            />
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-sm-2 offset-md-3">
            <label htmlFor="city">City:</label>
            <input
              className="form-control"
              type="text"
              name="city"
              id="city"
              placeholder="City"
              autoComplete="off"
              {...register("city", { required: "Required" })}
            />
          </div>
          <div className="col-sm-2">
            <label htmlFor="state">State</label>
            <input
              className="form-control"
              type="text"
              name="state"
              id="state"
              placeholder="State"
              autoComplete="off"
              {...register("state")}
            />
          </div>
          <div className="col-sm-2">
            <label htmlFor="zipcode">Zip Code</label>
            <input
              placeholder="Zip Code"
              className="form-control"
              type="number"
              min="400"
              max="9811"
              name="zipcode"
              id="zipccode"
              autoComplete="off"
              {...register("zipcode", {
                required: "Required",
              })}
            />
          </div>
        </div>
      </div>
      <br></br>
      <div className="form-group d-flex justify-content-center">
        <button type="submit" className="btn btn-primary btn-block">
          REGISTER
        </button>
      </div>
      <br></br>
    </form>
    </div>
  );
};
