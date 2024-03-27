import { useNavigate } from "react-router-dom";

const NewProject = () => {
  // Peradresavimo (redirect) kūrimas
  const navigate = useNavigate();

  // Produkto formos submitas
  const handleSubmit = (e) => {
    e.preventDefault();

    // Duomenų iš formos paėmimo pradžia
    const formData = new FormData(e.target);
    const data = {};

    for (const input of formData.entries()) {
      data[input[0]] = input[1];
    }
    // Duomenų iš formos paėmimos pabaiga

    // Duomenų iš localStorage paėmimas
    const localData = localStorage.getItem("data");

    // Patikrinimas ar jie egzistuoja
    if (localData) {
      // Produkto pridėjimas jau esančiame masyve
      let convertedData = JSON.parse(localData);
      convertedData.push(data);
      convertedData = JSON.stringify(convertedData);
      localStorage.setItem("data", convertedData);
    } else {
      // Produkto pridėjimas naujame masyve
      localStorage.setItem("data", JSON.stringify([data]));
    }

    // Peradresavimo iniciavimas
    navigate("/user");
  };

  return (
    <>
      <h1>Naujas projektas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Projekto pavadinimas</label>
          <input type="text" className="form-control" name="project_name" />
        </div>
        <div className="mb-3">
          <label>Nuotrauka</label>
          <input type="text" className="form-control" name="project_photo" />
        </div>
        <div className="mb-3">
          <label>Projekto aprašymas</label>
          <input
            type="text"
            className="form-control"
            name="project_description"
          />
        </div>
        <div className="mb-3">
          <label>Siūloma svarstymo data</label>
          <input
            type="text"
            className="form-control"
            name="consideration_day"
          />
        </div>
        <div className="mb-3">
          <label>Autorius</label>
          <input type="text" className="form-control" name="author" />
        </div>

        <button className="btn btn-primary">Pridėti</button>
      </form>
    </>
  );
};

export default NewProject;
