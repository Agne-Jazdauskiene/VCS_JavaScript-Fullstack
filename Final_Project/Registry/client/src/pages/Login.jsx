import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/Main.jsx";
import axios from "axios";

const Login = () => {
  const [message, setMessage] = useState();
  const { setUser } = useContext(MainContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    for (const input of formData.entries()) {
      data[input[0]] = input[1];
    }

    axios
      .post("http://localhost:3000/users/login", data)
      .then((resp) => {
        setUser(resp.data);
        navigate("/");
      })
      .catch((err) => setMessage(err.response.data));
  };

  return (
    <>
      <h1 className="mb-5">Seimo narių darbotvarkės registras</h1>
      {/* <h2>Prašome prisijungti</h2> */}
      {message && <div className="alert alert-danger">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* <label>Prašome įvesti el. pašto adresą:</label> */}
          <input
            type="email"
            placeholder="El. pašto adresas"
            className="form-control"
            name="email"
          />
        </div>
        <div className="mb-3">
          {/* <label>Prašome įvesti slaptažodį:</label> */}
          <input
            type="password"
            placeholder="Slaptažodis"
            className="form-control"
            name="password"
          />
        </div>
        <button className="btn btn-primary">Prisijungti</button>
      </form>
    </>
  );
};

export default Login;
