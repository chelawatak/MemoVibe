import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://memovive.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      props.showAlert("Logged In successfully", "success");
      localStorage.setItem("token", json.auth_token);
      navigate("/");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5 logincss">
      <h2 className="my-4 logintext RegisrationGrad">Login</h2>
      <form onSubmit={handleSubmit}>
        Email
        <div className="mb-3 inpspan">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            style={{
              borderBottom: "1px solid #1eff00",
              fontWeight: "500",
              backgroundColor: "rgba(1,42,31)",
              color: "white"
            }}
            value={credentials.email}
            onChange={onChange}
            className="form-control my-1 bordercss"
            id="email"
            aria-describedby="emailHelp"
            minLength={5}
            required
          />
          <span className="mx-2 my-2">
            <i className="fa-solid fa-envelope"></i>
          </span>
        </div>
        Password
        <div className="mb-3 inpspan">
          <input
            type="password"
            name="password"
            style={{
              borderBottom: "1px solid #1eff00",
              fontWeight: "500",
              backgroundColor: "rgba(1,42,31)",
              color: "white"
            }}
            value={credentials.password}
            onChange={onChange}
            className="form-control my-1 bordercss"
            id="password"
            minLength={5}
            required
            placeholder="Enter your password"
          />
          <span className="mx-2 my-2">
            <i className="fa-solid fa-key"></i>
          </span>
        </div>
        <button type="submit" className="btn logout-btn my-2">
          Submit
        </button>
        <p>
          Don't have an account? <Link to="/signup">register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
