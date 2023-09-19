import React, { useContext, useState } from "react";
import contactContext from "../context/contacts/contactContext";


const Contact = () => {
  const mycontext = useContext(contactContext);
  const { addContact } = mycontext;

  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addContact(contact.name, contact.email,  contact.message);
    setContact({ name: "", email: "" , message: ""});
    
  document.getElementById('email').value='';
  document.getElementById('name').value='';
  document.getElementById('message').value='';
  };

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  
  

  return (
    <div className=" contactus">
      <div className="container">
        <div className="contactClass mx-3 col">
          <div className=" contact-gradient" style={{ width: "100%" }}>
            <div className=" my-3 contactGradient1">
              <form className="my-4 mx-3 contactus-left">
                <div
                  className="mb-3 "
                  style={{ borderBottom: "1px solid grey" }}
                >
                  <h5 className="inside-contacts">
                    <i className="fa fa-comments" aria-hidden="true"></i> Chat
                    on us
                  </h5>
                  <h6>Always available to chat with you. Just ping on.</h6>
                  <p>chelawatak@gmail.com</p>
                </div>

                <div
                  className="mb-3"
                  style={{ borderBottom: "1px solid grey" }}
                >
                  <h5>
                    <i className="fa fa-globe" aria-hidden="true"></i> Visit us
                  </h5>
                  <h6> Come and say hello at our office HQ.</h6>
                  <p>
                    S-629, BH3, The LNM Institute of Information Technology,
                    Jaipur (302031)
                  </p>
                </div>

                <div className="mb-3">
                  <h5>
                    <i className="fa fa-phone" aria-hidden="true"></i> Call us
                  </h5>
                  <h6>Mon - Fri From 9am to 6pm.</h6>
                  <h6>7340282458</h6>
                  <p>.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container my-3 contactGradient2">
          <h2 className="gradientText mx-3" style={{ fontSize: "2.5rem" }}>
            Got an Idea? We've got the skills. Let's team up
          </h2>
          <form className="my-4 mx-3">
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label"
                style={{ color: "white" }}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                style={{
                  background: "white",
                  border: "none",
                  borderBottom: "4px solid #2A875F",
                  width: "95%",
                  color: "black",
                  fontWeight: "500"
                }}
                className="form-control"
                id="name"
                name="name"
                aria-label="With textarea"
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "white" }}
              >
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter email address"
                style={{
                  background: "white",
                  border: "none",
                  borderBottom: "4px solid #2A875F",
                  width: "95%",
                  color: "black",
                  fontWeight: "500"
                  
                }}
                className="form-control"
                id="email"
                name="email"
                aria-label="With textarea"
                onChange={onChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label
                htmlFor="message"
                className="form-label"
                style={{ color: "white" }}
              >
                Your Message
              </label>
              <textarea
                type="text"
                placeholder="Enter your message"
                style={{
                  height: "80px",
                  background: "white",
                  border: "none",
                  borderBottom: "4px solid #2A875F",
                  width: "95%",
                  color: "black",
                  fontWeight: "500"
                }}
                className="form-control"
                id="message"
                name="message"
                
                onChange={onChange}
                required
              />
            </div>
          </form>
          <center>  
          <button
              type="submit"
              className="btn my-3 logout-btn"
              onClick={handleClick}
              style={{ width: "50%" }}
            >
              Send Message
            </button>
          </center>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
