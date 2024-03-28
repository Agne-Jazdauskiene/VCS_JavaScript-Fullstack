// import Home from "./pages/Home.nereikaligas.jsx";
import Login from "./pages/Login.jsx";
import Manager from "./pages/Manager.jsx";
import Projects from "./pages/Projects.jsx";
import NewProject from "./components/newProject/NewProject.jsx";
import EditProject from "./components/edit-project/Edit.project.jsx";
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
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/new-project" element={<NewProject />} />
            <Route
              path="/projects/edit-project/:id"
              element={<EditProject />}
            />
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
