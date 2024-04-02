import { useState, useEffect, useContext } from "react";
import MainContext from "../../context/Main.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import style from "./NewProject.module.css";

const NewProject = () => {
  const [message, setMessage] = useState();
  // const [loader, setLoader] = useState(false);
  // Pasiimam is konteksto user reiksme
  // Patikrinam ar ji yra
  // Jeigu nera tuomet prijungiam useNavigate()
  // Ir padarom peradresavima navigate('/login');;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // formData.append('author', user._id);
    formData.append("author", "66029e6559e812b86f82e1e3");

    axios
      .post("http://localhost:3000/projects/", formData)
      .then((resp) => {
        navigate("/");
        // console.log(resp);
      })
      .catch((err) => setMessage(err.message));
  };

  return (
    <>
      <h1 className="mb-5">Naujas projektas</h1>

      <form onSubmit={handleSubmit}>
        {message && <div className="alert alert-danger">{message}</div>}

        <div className="mb-3">
          {/* <label>Projekto pavadinimas</label> */}
          <input
            type="text"
            placeholder="Projekto pavadinimas"
            className="form-control"
            name="project_name"
          />
        </div>
        <div className="mb-3">
          {/* <label>Nuotrauka</label> */}
          <input
            type="file"
            placeholder="Nuotrauka"
            className="form-control"
            name="project_photo"
          />
        </div>
        <div className="mb-3">
          {/* <label>Projekto aprašymas</label> */}
          <input
            type="text"
            placeholder="Projekto aprašymas"
            className="form-control"
            name="project_description"
          />
        </div>
        <div className="mb-3">
          <label>Siūloma svarstymo data</label>
          <input
            type="date"
            placeholder="Siūloma svarstymo data"
            className="form-control"
            name="consideration_date"
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

        <button className="btn btn-primary">Pridėti</button>
      </form>
    </>
  );
};

export default NewProject;
