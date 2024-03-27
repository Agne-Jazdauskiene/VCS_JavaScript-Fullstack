import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // Paimame produktus iš localStorage
    const localData = JSON.parse(localStorage.getItem("data"));

    // Patikriname ar informacija egzistuoja
    if (localData) setData(localData); //Priskiriame produktų informaciją prie state'o
  }, [loader]);

  // Ištrynimo funkcija
  const handleDelete = (index) => {
    // Ištrynimas iš masyvo
    data.splice(index, 1);
    // Duomenų priskyrimas į localStorage
    localStorage.setItem("data", JSON.stringify(data));

    // Komponento atnaujinimas
    setLoader((prev) => !prev);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Vartotojo puslapis</h2>
        <Link to="/user/new-project" className="btn btn-success">
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
          </tr>
        </thead>
        <tbody>
          {data.map((project, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{project.project_name}</td>
              <td>
                <img src={project.project_photo} style={{ maxWidth: 50 }} />
              </td>
              <td>{project.project_description}</td>
              <td>{project.consideration_day}</td>
              <td>{project.author}</td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Ištrinti
                </button>
                <Link
                  to={"/user/edit-project/" + index}
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

export default User;
