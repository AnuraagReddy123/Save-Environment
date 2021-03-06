
/*
  This component is used for user sign up by taking required inputs from the user along with google authentication.
*/

import React from "react";
import { useHistory } from "react-router";
import "./signUp.css";
import { signInWithGoogle } from "./utils/auth";

function SignUp(props) {

  const history = useHistory();

  return (
    <div>
      <div className="signUpField">
        <label for="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className={"form-control" + props.validity["username"]}
          id="SignUpInput0"
          name="username"
          onChange={props.handleChange}
          value={props.userData.username}
          required
        ></input>
        <div className="invalid-feedback">Please enter valid username!</div>
      </div>

      <div className="signUpField">
        <label for="firstName" className="form-label">
          First name
        </label>
        <input
          type="text"
          className={"form-control" + props.validity["firstName"]}
          id="SignUpInput1"
          name="firstName"
          onChange={props.handleChange}
          value={props.userData.firstName}
          required
        ></input>
        <div className="invalid-feedback">Please enter yout First name!</div>
      </div>

      <div className="signUpField">
        <label for="lastName" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className={"form-control" + props.validity["lastName"]}
          id="SignUpInput2"
          onChange={props.handleChange}
          name="lastName"
          value={props.userData.lastName}
          required
        ></input>
        <div className="invalid-feedback">Please enter your Last name!</div>
      </div>

      <div className="signUpField">
        <label for="emailId" className="form-label">
          Email Id
        </label>
        <input
          type="email"
          className={"form-control" + props.validity["emailId"]}
          id="validationCustom01"
          name="emailId"
          onChange={props.handleChange}
          value={props.userData.emailId}
          required
        ></input>
        <div className="invalid-feedback">
          Please enter valid Mobile Number!
        </div>
      </div>

      <div className="signUpField">
        <label for="password" className="form-label">
          Password
        </label>
        <input
          type="Password"
          className={"form-control mb-3" + props.validity["password"]}
          id="exampleFormControlInput4"
          name="password"
          onChange={props.handleChange}
          value={props.userData.password}
          required
        ></input>
        <div className="invalid-feedback">Please enter Password!</div>
      </div>

      <div className="signUpButton">
        <button
          onClick={props.handleSubmit}
          type="submit"
          className="btn btn-secondary"
          name="signUpBtn"
        >
          Create Account
        </button>
        <button
          onClick={() => signInWithGoogle(history)}
          type="submit"
          className="btn btn-secondary signUpG"
        >
          Sign Up With Google
        </button>
      </div>
    </div>
  );
}

export default SignUp;
