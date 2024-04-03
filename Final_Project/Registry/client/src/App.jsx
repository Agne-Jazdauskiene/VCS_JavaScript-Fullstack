// import Home from "./pages/Home.nereikaligas.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import MainContext from "./context/Main.jsx";
import Login from "./pages/Login.jsx";
import Projects from "./pages/Projects.jsx";
import NewProject from "./components/new-project/NewProject.jsx";
import EditProject from "./components/edit-project/EditProject.jsx";
import Users from "./pages/Users.jsx";
import EditUser from "./components/edit-user/EditUser.jsx";
import NewUser from "./components/new-user/NewUser.jsx";
// import Manager from "./pages/Manager.jsx";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();
  const [manager, setManager] = useState();
  // const { user } = useContext(MainContext);
  // const { manager } = useContext(MainContext);

  //PAČIOJ PABAIGOJ DARYTI AUTENTIFIKACIJĄ
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/check-auth")
      .then((resp) => setUser(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const contextValues = {
    user,
    setUser,
    manager,
    setManager,
  };

  return (
    <>
      <MainContext.Provider value={contextValues}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            {user && (
              <>
                <Route path="/" element={<Projects />} />
                <Route path="/new-project" element={<NewProject />} />
                <Route path="/edit-project/:id" element={<EditProject />} />
              </>
            )}

            {manager && (
              <>
                <Route path="/users" element={<Users />} />
                <Route path="/edit-user/:id" element={<EditUser />} />
                <Route path="/new-user/" element={<NewUser />} />
              </>
            )}
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
};

export default App;
