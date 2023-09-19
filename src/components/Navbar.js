import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.showAlert("Logged out successfully", "success");
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg  blureffect"
      style={{
        position: "sticky",
        height: "70px",
        width: "100%",
        zIndex: "40"
      }}
    >
      <div className="container-fluid blureffect">
        <Link className="navbar-brand " to="#">
          <span className="memovibe"> MemoVibe</span>
          ....
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-cloud"
            viewBox="0 0 16 16"
            id="IconChangeColor"
          >
            {" "}
            <path
              d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
              id="mainIconPathAttribute"
              fill="#1eff00"
            ></path>{" "}
          </svg>
          <span className="cloud mx-1"> Cloud </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon whitefont"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link whitefont"
                style={{ fontWeight: "500" }}
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link whitefont"
                style={{ fontWeight: "500" }}
                to="/contact"
              >
                Contact us
              </Link>
            </li>
          </ul>

          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link className="btn mx-2 logout-btn" to="/login" role="button">
                Login <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
              <Link className=" btn  logout-btn" to="/signup" role="button">
                Signup <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </form>
          ) : (
            <button className="mx-3  logout-btn" onClick={handleLogout}>
              Logout <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
