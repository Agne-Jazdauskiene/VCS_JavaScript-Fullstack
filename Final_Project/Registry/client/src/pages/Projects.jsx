import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../context/Main";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState([]);
  // const [loader, setLoader] = useState(false);
  // Pasiimam is konteksto user reiksme
  // Patikrinam ar ji yra
  // Jeigu nera tuomet prijungiam useNavigate()
  // Ir padarom peradresavima navigate('/login');
  const { showProjects, setUser } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/projects/")
      .then((resp) => setData(resp.data))
      .catch((err) => {
        if (err.response.status === 401) {
          setUser(false);
          navigate("/login");
        }
      });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mb-5">VISI Projektai svarstymui - MATO VISI</h2>
        {/* <Link to="/users/new-user" className="btn btn-success">
          Kurti naują/ koreguoti vartotoją
        </Link> */}
        {/* {true && <button>Naujas vartotojas</button>} */}
        <Link to="/new-user" className="btn btn-primary">
          Naujas vartotojas
        </Link>
        <Link to="/new-project" className="btn btn-success">
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
            <th>Sukurta</th>
            <th>Statusas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((project, id) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{project.project_name}</td>
              <td>
                <img
                  src={"http://localhost:3000/uploads/" + project.project_photo}
                  style={{ maxWidth: 50 }}
                />
              </td>
              <td>{project.project_description}</td>
              <td>{project.consideration_day}</td>
              <td>{project.author.user_name}</td>
              <td>{project.created_at}</td>
              <td>{project.project_status.project_status}</td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(id)}
                >
                  Ištrinti
                </button>
                <Link to={"/edit-project/" + id} className="btn btn-warning">
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
