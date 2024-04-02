// import Home from "./pages/Home.nereikaligas.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MainContext from "./context/Main.jsx";
import Login from "./pages/Login.jsx";
import Projects from "./pages/Projects.jsx";
import NewProject from "./components/new-project/NewProject.jsx";
import EditProject from "./components/edit-project/EditProject.jsx";
import Users from "./pages/Users.jsx";
import EditUser from "./components/edit-user/EditUser.jsx";
import NewUser from "./components/new-user/NewUser.jsx";
import Manager from "./pages/Manager.jsx";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();

  //PAČIOJ PABAIGOJ DARYTI
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/users/check-auth")
  //     .then((resp) => setUser(resp.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const contextValues = {
    user,
    setUser,
  };

  return (
    <>
      <MainContext.Provider value={contextValues}>
        <BrowserRouter>
          <Routes>
            {/* USERIO reik žiūrėt į Instagram pvz. */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Projects />} />
            <Route path="/new-project" element={<NewProject />} />
            <Route path="/edit-project/:id" element={<EditProject />} />
            <Route path="/users" element={<Users />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/new-user/" element={<NewUser />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
};

export default App;
