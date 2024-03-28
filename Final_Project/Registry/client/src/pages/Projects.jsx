import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // Paimame produktus iš localStorage
    const localData = JSON.parse(localStorage.getItem("data"));

    // Patikriname ar informacija egzistuoja
    if (localData) setData(localData); //Priskiriame produktų informaciją prie state'o
  }, [loader]);

  // Ištrynimo funkcija
  const handleDelete = (id) => {
    // Ištrynimas iš masyvo
    data.splice(id, 1);
    // Duomenų priskyrimas į localStorage
    localStorage.setItem("data", JSON.stringify(data));

    // Komponento atnaujinimas
    setLoader((prev) => !prev);
  };

  return (
    <>
      {true && <button>awdawd</button>}
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mb-5">VISI Projektai svarstymui - MATO VISI</h2>
        {/* <Link to="/users/new-user" className="btn btn-success">
          Kurti naują/ koreguoti vartotoją
        </Link> */}
        <Link to="/projects/new-project" className="btn btn-success">
          Naujas projektas
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Projekto pavadinimas</th>
            <th>Nuotrauka</th>
            <th>Projekto aprašymas</th>
            <th>Siūloma svarstymo data</th>
            <th>Autorius</th>
            <th>Statusas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((project, id) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{project.project_name}</td>
              <td>
                <img src={project.project_photo} style={{ maxWidth: 50 }} />
              </td>
              <td>{project.project_description}</td>
              <td>{project.consideration_day}</td>
              <td>{project.author}</td>
              <td>{project.status}</td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(id)}
                >
                  Ištrinti
                </button>
                <Link
                  to={"/projects/edit-project/" + id}
                  className="btn btn-warning"
                >
                  Redaguoti
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Projects;
