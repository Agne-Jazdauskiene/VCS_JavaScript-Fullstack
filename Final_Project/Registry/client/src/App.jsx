import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import User from "./pages/User.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Main from "./context/Main.jsx";
import MainContext from "./context/Main.jsx";
import "./App.css";

const App = () => {
  // CRUD:
  // CREATE
  // READ
  // UPDATE
  // DELETE

  return (
    <>
      <MainContext.Provider value>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/user/:id" element={<User />} /> */}
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
};

export default App;
