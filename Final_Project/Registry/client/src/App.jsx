// import Home from "./pages/Home.nereikaligas.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MainContext from "./context/Main.jsx";
import Login from "./pages/Login.jsx";
import Manager from "./pages/Manager.jsx";
import Projects from "./pages/Projects.jsx";
import NewProject from "./components/new-project/NewProject.jsx";
import EditProject from "./components/edit-project/Edit.project.jsx";
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
            {/* <Route path="/user" element={<User />} /> */}
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
