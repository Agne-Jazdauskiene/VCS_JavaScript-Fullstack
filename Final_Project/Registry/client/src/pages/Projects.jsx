import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../context/Main";
import axios from "axios";
import style from "../components/edit-status/EditStatus.module.css";

const Projects = () => {
  const [data, setData] = useState([]);
  // const [loader, setLoader] = useState(false);
  // Pasiimam is konteksto user reiksme
  // Patikrinam ar ji yra
  // Jeigu nera tuomet prijungiam useNavigate()
  // Ir padarom peradresavima navigate('/login');
  const navigate = useNavigate();
  // const [manager, setManager] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(MainContext);
  const { manager } = useContext(MainContext);
  const [project, setProject] = useState();
  // const { showProjects, setUser } = useContext(MainContext);

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
  }, [loading]);
  //NEVEIKIA PSL ATNAUJINIMAS

  // Ištrynimo funkcija - sutvarkyta - suvienodinti - naudoti axios. Padaryti puslapio perkrovimą informacijai atnaujinti
  const handleDelete = (id) => {
    const confirmation = window.confirm("Ar tikrai norite ištrinti?");
    if (confirmation) {
      axios
        .delete("http://localhost:3000/projects/" + id)
        .then((resp) => console.log(resp.data))
        .catch((err) => {
          //  console.err("Klaida", err);
          setMessage("Įvyko klaida");
        });
    }
  };

  const getStatusColorClassName = (status) => {
    switch (status) {
      case "Pateiktas":
        return style.statusProvided;
      case "Priimtas":
        return style.statusAccepted;
      case "Atmestas":
        return style.statusRejected;
      case "Nepakanka duomenų":
        return style.statusInsufficientData;
      default:
        return "";
    }
  };

  // const [loader, setLoader] = useState(false);
  // const handleDelete = (id) => {
  //   fetch("http://localhost:3000/projects/" + id, {
  //     method: "DELETE",
  //   })
  //     .then((resp) => resp.text())
  //     .then((resp) => {
  //       console.log(resp);
  //       setLoader(!loader);
  //     });
  // };

  return (
    <>
      {/* {true && <button>Naujas vartotojas</button>} */}
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mb-5">Projektai svarstymui</h2>

        {user.manager ? (
          <>
            <Link to="/users" className="btn btn-primary">
              Seimo nariai
            </Link>
            <Link to="/new-user" className="btn btn-primary">
              Naujas seimo narys
            </Link>
            <Link to="/new-project" className="btn btn-success">
              Naujas projektas
            </Link>
          </>
        ) : (
          <Link to="/new-project" className="btn btn-success">
            Naujas projektas
          </Link>
        )}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Nr.</th>
            {/* <th>ID</th> */}
            <th>Pavadinimas</th>
            <th>Nuotrauka</th>
            <th>Projekto aprašymas</th>
            <th>Data svarstymui</th>
            <th>Autorius</th>
            <th>Sukurta</th>
            <th>Statusas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((project, index) => (
            <tr key={project._id}>
              <td>{(project, index)}</td>
              {/* <td>{project._id}</td> */}
              <td>{project.project_name}</td>
              <td>
                <img
                  src={"http://localhost:3000/uploads/" + project.project_photo}
                  style={{ maxWidth: 100 }}
                />
              </td>
              <td>{project.project_description}</td>
              {/* <td>{project.consideration_date}</td> */}
              <td>
                {new Date(project.consideration_date).toLocaleDateString(
                  "lt-LT"
                )}
              </td>
              <td>
                {project.author && (
                  <>
                    <span>{project.author.user_name}</span>
                    <span>{project.author.last_name}</span>
                    <div>{project.author.party_name}</div>
                  </>
                )}
              </td>
              {/* <td>{project.created_at}</td> */}
              <td>
                <div>
                  {new Date(project.created_at).toLocaleDateString("lt-LT")}
                </div>
                <div>
                  {new Date(project.created_at).toLocaleTimeString("lt-LT")}
                </div>
              </td>

              <td>{project.project_status?.project_status}</td>
              {/* <td>
                <Link to={'/' + (data._id)} className={${styles.statusButton} ${getStatusColorClassName(data.status_name.name)}}>
                {data.status_name.name}</Link>
              </td> */}

              {project.author._id === user._id && (
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(project._id)}
                  >
                    Ištrinti
                  </button>
                  <Link
                    to={"/edit-project/" + project._id}
                    className="btn btn-warning"
                  >
                    Redaguoti
                  </Link>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Projects;
