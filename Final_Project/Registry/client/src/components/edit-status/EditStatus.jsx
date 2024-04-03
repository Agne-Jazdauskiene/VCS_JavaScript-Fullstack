import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainContext from "../../context/Main";
import axios from "axios";

const EditStatus = ({ data }) => {
  const { setUser, user } = useContext(MainContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(
    data && data.status ? data.status : ""
  );
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3000/projects/${id}", {
        project_status: selectedStatus,
      })

      .then((resp) => {
        setMessage("Statusas pakeistas");
        navigate("/");
      })
      .catch((err) => setMessage(err.response.data));
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return user?.manager ? (
    <div className="container">
      <h1>Keisti statusą</h1>
      <select value={selectedStatus} onChange={handleStatusChange}>
        <option disabled value="">
          Pasirinkite statusą
        </option>
        <option value="6602d465d3c37a670419bbfd">Priimtas</option>
        <option value="6602d450d3c37a670419bbfb">Atmestas</option>
        <option value="6602d47fd3c37a670419bbff">Nepakanka duomenų</option>
      </select>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Pakeisti
      </button>
      {message && <p>{message}</p>}
    </div>
  ) : (
    "Negalima pakeisti"
  );
};

export default EditStatus;
