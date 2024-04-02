import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainContext from "../../context/Main.jsx";
import axios from "axios";

const EditUser = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState();

  // Peradresavimo (redirect) kūrimas
  const navigate = useNavigate();
  // Reikšmės patalpintos url adrese paėmimas
  const { id } = useParams();

  useEffect(() => {
    // Vartotojo duomenų paėmimas
    // AXIOS - formuojame užklausą
    axios
      .get("http://localhost:3000/users" + id) // Pagal user ID
      .then((resp) => setForm(resp.data))
      .catch((err) => setMessage(err.response.data));
  }, []);

  // Formos duomenų įrašymas
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // įvesti user id (put)
    axios
      .put("http://localhost:3000/users" + id, formData)
      .then((resp) => navigate("/users"))
      .catch((err) => setMessage(err.response.data));
  };

  return (
    <>
      <h1 className="mb-5">Redaguoti vartotoją</h1>

      <form onSubmit={handleSubmit}>
        {message && <div className="alert alert-danger">{message}</div>}

        <div className="mb-3">
          <label>Vardas</label>
          <input
            type="text"
            className="form-control"
            name="user_name"
            // Reikšmės atvaizdavimas laukelyje
            defaultValue={form.user_name}
          />
        </div>
        <div className="mb-3">
          <label>Pavardė</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            defaultValue={form.last_name}
          />
        </div>
        <div className="mb-3">
          <label>Politinė partija</label>
          <input
            type="text"
            className="form-control"
            name="party_name"
            defaultValue={form.party_name}
          />
        </div>
        <div className="mb-3">
          <label>El. pašto adresas</label>
          <input
            type="text"
            className="form-control"
            name="email"
            defaultValue={form.email}
          />
        </div>
        <div className="mb-3">
          <label>Slaptažodis</label>
          <input
            type="text"
            className="form-control"
            name="password"
            defaultValue={form.password}
          />
        </div>

        <button className="btn btn-primary">Patvirtinti pakeitimus</button>
      </form>
    </>
  );
};

export default EditUser;
