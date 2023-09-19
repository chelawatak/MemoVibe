import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import ContactState from "./context/contacts/ContactState";
import Alert from "./components/Alert";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const[alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <>
      <NoteState>
      <ContactState>
        <BrowserRouter>
          <div className="nvbr blureffect" >
            <Navbar showAlert={showAlert}/>
          </div>
          <Alert alert={alert}/>
          <div className="nvbr ">
          <Routes>

            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/home" element={<Home showAlert={showAlert}/>}></Route>
            <Route exact path="/contact" element={<Contact showAlert={showAlert}/>}></Route>
            <Route exact path="/login"  element={<Login showAlert={showAlert}/>}></Route>
            <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
          </Routes>
          </div>
          
            <Footer />

        </BrowserRouter>
        
      </ContactState>
      </NoteState>
      
        
    </>
  );
}

export default App;