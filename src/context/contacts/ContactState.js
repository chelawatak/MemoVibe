import ContactContext from "./contactContext";
import { useState } from "react";
import React from "react";


const ContactState = (props) => {
  const host = "http://localhost:5000";
  const contactsInitial = [];
  const [contacts, setContacts] = useState(contactsInitial);

  
  const addContact = async (name, email, message) => {
    // TODO: API Call
    // API Call
    const response = await fetch(`${host}/api/contacts/contacting`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ name, email, message })
    });

    const note = await response.json();
    setContacts(contacts.concat(note));
  };


  


  return (
    <ContactContext.Provider
      value={{contacts, addContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
