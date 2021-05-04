import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";
import { useDispatch, useSelector } from "react-redux";
import { startRegister } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [values, handelInputChange] = useForm({
    name: "Juan David",
    email: "jdmv161010@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = values;

  const handelRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegister(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("name is require"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("password is not valid"));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handelRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handelInputChange}
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handelInputChange}
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handelInputChange}
          className="auth__input"
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          onChange={handelInputChange}
          className="auth__input"
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
