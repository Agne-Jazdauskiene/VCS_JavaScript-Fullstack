import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainContext from "../../context/Main.jsx";
import axios from "axios";

const EditProject = () => {
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
      .get("http://localhost:3000/projects/" + id) // Pagal posto ID
      .then((resp) => setForm(resp.data))
      .catch((err) => setMessage(err.response.data));
  }, []);

  // Formos duomenų įrašymas
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // įvesti project id (put)
    axios
      .put("http://localhost:3000/projects/" + id, formData)
      .then((resp) => navigate("/"))
      .catch((err) => setMessage(err.response.data));
  };

  return (
    <>
      <h1 className="mb-5">Redaguoti projektą</h1>

      <form onSubmit={handleSubmit}>
        {message && <div className="alert alert-danger">{message}</div>}

        <div className="mb-3">
          <label>Pavadinimas</label>
          <input
            type="text"
            className="form-control"
            name="project_name"
            // Reikšmės atvaizdavimas laukelyje
            defaultValue={form.project_name}
          />
        </div>
        <div className="mb-3">
          <label>Nuotrauka</label>
          <input
            type="file"
            className="form-control"
            name="photo"
            defaultValue={form.project_photo}
          />
        </div>
        <div className="mb-3">
          <label>Aprašymas</label>
          <input
            type="text"
            className="form-control"
            name="project_description"
            defaultValue={form.project_description}
          />
        </div>
        <div className="mb-3">
          <label>Siūloma svarstymo data</label>
          <input
            type="date"
            className="form-control"
            name="consideration_day"
            defaultValue={form.consideration_day}
          />
        </div>
        {/* <div className="mb-3">
          <label>Autorius</label>
          <input
            type="text"
            className="form-control"
            name="author"
            defaultValue={form.author}
          />
        </div> */}
        {/* <div className="mb-3">
          <label>Projekto statusas</label>
          <input
            type="text"
            className="form-control"
            name="status"
            defaultValue={form.status}
          />
        </div> */}

        <button className="btn btn-primary">Patvirtinti pakeitimus</button>
      </form>
    </>
  );
};

export default EditProject;
