import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: ""
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://memovive.onrender.com/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password
      })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      props.showAlert("Registered Successfully", "success");
      navigate("/login");
    } else {
      props.showAlert("Email already registered", "danger");
      setCredentials({ name: credentials.name, email: "", password: "" });
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const [change, setChange] = useState(true);
  function buttonHandler() {
    setChange(!change);
  }

  return (
    <div className="container logincss my-3">
      <h2 className="my-3 RegisrationGrad logintext">Registration</h2>
      <form className="my-3 mt-5" onSubmit={handleSubmit}>
        Name
        <div className="mb-3 inpspan" style={{ display: "flex" }}>
          <input
            type="name"
            value={credentials.name}
            placeholder="Please enter your name"
            style={{
              borderBottom: "1px solid #1eff00",
              fontWeight: "500",
              backgroundColor: "rgba(1,42,31)",
              color: "white"
            }}
            onChange={onChange}
            name="name"
            className="form-control my-1 bordercss "
            id="name"
            minLength={5}
            required
          />
          <span className="mx-2 my-2">
            <i className="fa-solid fa-user"></i>
          </span>
        </div>
        Email
        <div className="mb-3 inpspan">
          <input
            type="email"
            value={credentials.email}
            placeholder="Please enter your email"
            onChange={onChange}
            style={{
              borderBottom: "1px solid #1eff00",
              fontWeight: "500",
              backgroundColor: "rgba(1,42,31)",
              color: "white"
            }}
            name="email"
            className="form-control my-1 bordercss"
            id="email"
            aria-describedby="emailHelp"
            minLength={5}
            required
          />
          <span className="mx-2  my-2">
            {" "}
            <i className="fa-solid fa-envelope"></i>
          </span>
        </div>
        Password
        <div className="mb-3 inpspan">
          <input
            type="password"
            value={credentials.password}
            placeholder="Please enter a strong password "
            style={{
              borderBottom: "1px solid #1eff00",
              fontWeight: "500",
              backgroundColor: "rgba(1,42,31)",
              color: "white"
            }}
            onChange={onChange}
            name="password"
            className="form-control my-1 bordercss"
            id="password"
            minLength={5}
            required
          />
          <span className="mx-2  my-2">
            <i className="fa-solid fa-key"></i>
          </span>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault1"
            onChange={buttonHandler}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault2">
            I agree to terms and conditions
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault2"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault2">
            Remember me
          </label>
        </div>
        <button disabled={change} type="submit" className="btn logout-btn my-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
