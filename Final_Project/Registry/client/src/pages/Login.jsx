import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/Main.jsx";
import axios from "axios";
// import login-side-picture from "../assets/login_side_picture.png";

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
      {/* <img src="../assets/login_side_picture.png" alt="" /> */}
      {/* <link rel="stylesheet" href="../assets/login_side_picture.png" /> */}

      <div className="d-flex flex-column align-items-center">
        <h1 className="mb-5 pb-4 col-8">Seimo narių darbotvarkės registras</h1>
        {/* <h2>Prašome prisijungti</h2> */}
        {message && <div className="alert alert-danger">{message}</div>}
        <form className="col-8" onSubmit={handleSubmit}>
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
          <button className="btn btn-primary mt-4">
            <div className="d-flex gap-2">
              <span>Prisijungti</span>
              <i class="bi bi-box-arrow-in-right"></i>
            </div>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
