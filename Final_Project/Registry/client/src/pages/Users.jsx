import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../context/Main";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([]);
  // const [loader, setLoader] = useState(false);
  // Pasiimam is konteksto user reiksme
  // Patikrinam ar ji yra
  // Jeigu nera tuomet prijungiam useNavigate()
  // Ir padarom peradresavima navigate('/login');
  const { showUsers, setUser } = useContext(MainContext);
  const navigate = useNavigate();
  const [loading, setLoader] = useState(false);

  // NEVEIKIA puslapio perkrovimas po info ištrynimo !!!!!!!!!
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/")
      .then((resp) => setData(resp.data))
      .catch((err) => {
        if (err.response.status === 401) {
          setUser(false);
          navigate("/login");
        }
      });
  }, [loading]);

  // Ištrynimo funkcija - su fetch. Apačioj pertvarkiau su axios
  // const [loader, setLoader] = useState(false);
  // const handleDelete = (user._id) => {
  //   fetch("http://localhost:3000/users/" + user._id, {
  //     method: "DELETE",
  //   })
  //     .then((resp) => resp.text())
  //     .then((resp) => {
  //       console.log(resp);
  //       setLoader(!loader);
  //     });
  // };

  const handleDelete = (id) => {
    const confirmation = window.confirm("Ar tikrai norite ištrinti?");
    if (confirmation) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((resp) => console.log(resp.data))
        .catch((err) => {
          //  console.err("Klaida", err);
          setMessage("Įvyko klaida");
        });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mb-5">Seimo narių sąrašas</h2>

        <Link to="/new-user" className="btn btn-primary">
          Naujas seimo narys
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Nr.</th>
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>Politinė partija</th>
            <th>El. pašto adresas</th>
            {/* <th>Slaptažodis</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user._id}>
              <td>{(user, index)}</td>
              {/* <td>{user._id}</td> */}
              <td>{user.user_name}</td>
              <td>{user.last_name}</td>
              <td>{user.party_name}</td>
              <td>{user.email}</td>
              {/* <td>{user.password}</td> */}

              <td>
                {/* <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(data._id)}
                >
                  Ištrinti
                </button> */}
                <Link to={"/edit-user/" + user._id} className="btn btn-warning">
                  <i class="bi bi-pencil"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
