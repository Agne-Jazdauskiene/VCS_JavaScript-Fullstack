import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // Duomenų paėmimas iš serverio
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      // Duomenų priskyrimas prie state'o
      .then((resp) => setData(resp));
  }, [loader]);

  // Ištrynimo funkcija
  const handleDelete = (id) => {
    console.log(id);

    fetch("http://localhost:3000/users/" + id, {
      method: "DELETE", // metodus geriau rasyti didziosiomis
    })
      .then((resp) => resp.text())
      .then((resp) => {
        console.log(resp);
        setLoader(!loader);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Admin</h2>
        <Link to="/admin/new-user" className="btn btn-success">
          Naujas vartotojas
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>El. pašto adresas</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  Ištrinti
                </button>
                <Link
                  to={"/admin/edit-user/" + item._id}
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

export default Admin;
