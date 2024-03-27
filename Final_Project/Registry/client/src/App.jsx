import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Manager from "./pages/Manager.jsx";
import User from "./pages/User.jsx";
import NewProject from "./components/newProject/NewProject.jsx";
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
            <Route path="/user" element={<User />} />
            <Route path="/user/new-project" element={<NewProject />} />
            {/* <Route path="/manager" element={<Manager />} /> */}
            {/* <Route
              path="/manager/new-user/:identifikatorius"
              element={<NewUser />}
            /> */}
            {/* <Route
              path="/manager/edit-user/:identifikatorius"
              element={<EditUser />}
            /> */}
            {/* <Route path="/user/:id" element={<User />} /> */}
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
};

export default App;
