import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Signin.scss";

function SignIn({ setAdmin, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // console.log(errors.email.length);

  const validate = (email, password) => {
    const errors = {};
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!password) {
      errors.password = "Password is required.";
    }
    if (!email) {
      errors.email = "Email is required.";
    }
    if (email && !email.match(mailformat)) {
      errors.email = "Email is invalid.";
    }

    if (Object.keys(errors).length === 0) {
      if (email === "admin@origin.com" && password === "admin@123") {
        setAdmin(true);
      }
      setUser(true);
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(errors, email, password, Object.keys(errors).length);
    setErrors(validate(email, password));
  };
  useEffect(() => {
    // console.log("hello");
    if (Object.keys(errors).length === 0) {
      navigate("/dashboard");
    }
  }, [errors, navigate]);

  return (
    <div className="signin">
      <p>
        To access admin page use <br /> <b>Username-:</b> admin@origin.com
        <br /> <b>Password-:</b> admin@123
      </p>
      <div className="signin-container">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="email">
            <label>Username</label>
            <div className="pseudo">
              <input
                type="text"
                placeholder="abc@origin.com"
                className="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
          </div>

          <div className="password">
            <label>Password</label>
            <div className="pseudo">
              <input
                type="password"
                className="security"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
          </div>

          {errors.email && errors.email.length > 0 && <p>{errors.email}</p>}
          {errors.password && errors.password.length > 0 && (
            <p>{errors.password}</p>
          )}

          <div className="submit">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
