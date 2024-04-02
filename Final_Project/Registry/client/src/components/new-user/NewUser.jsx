import { useState, useEffect, useContext } from "react";
import MainContext from "../../context/Main.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import user from "../../../../server/model/user.js";

const NewUser = () => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // formData.append('author', user._id);
    // LAIKINAS SPRENDIMAS
    const data = {
      author: user._id,
    };
    // formData.append("author", "6602932cfcec01c6a35ac699");
    for (const input of formData.entries()) {
      data[input[0]] = input[1];
    }

    axios
      .post("http://localhost:3000/users/register", data)
      .then((resp) => {
        navigate("/users");
        console.log(resp);
      })
      .catch((err) => setMessage(err.message));
  };

  return (
    <>
      <h1 className="mb-5">Naujas vartotojas</h1>

      <form onSubmit={handleSubmit}>
        {message && <div className="alert alert-danger">{message}</div>}

        <div className="mb-3">
          <input
            type="text"
            placeholder="Vardas"
            className="form-control"
            name="user_name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Pavardė"
            className="form-control"
            name="last_name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Politinė partija"
            className="form-control"
            name="party_name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="El. pašto adresas"
            className="form-control"
            name="email"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Slaptažodis"
            className="form-control"
            name="password"
          />
        </div>
        {/* <label>Autorius</label> */}
        {/* kažkaip pridėti pagal id autorius */}
        {/* <div className="mb-3">
          <input
            type="text"
            placeholder="Autorius"
            className="form-control"
            name="author"
          />
        </div> */}
        {/* <div className="mb-3">
          <input
            type="text"
            placeholder="Projekto statusas"
            className="form-control"
            name="status"
          />
        </div> */}

        <button className="btn btn-primary">Pridėti vartotoją</button>
      </form>
    </>
  );
};

export default NewUser;
