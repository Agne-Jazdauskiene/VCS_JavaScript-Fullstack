import { useNavigate } from "react-router-dom";

const NewKirpejas = () => {
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
    navigate("/admin");
  };

  return (
    <>
      <h1>Naujas Kirpėjas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Kirpėjo nuotrauka</label>
          <input type="text" className="form-control" name="photo" />
        </div>
        <div className="mb-3">
          <label>Kirpėjo vardas</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="mb-3">
          <label>Telefono numeris</label>
          <input type="number" className="form-control" name="phone" />
        </div>
        <div className="mb-3">
          <label>El. paštas</label>
          <input type="text" className="form-control" name="email" />
        </div>
        <div className="mb-3">
          <label>Valandinis įkainis</label>
          <input type="number" className="form-control" name="price" />
        </div>
        <div className="mb-3">
          <label>Įvertinimas</label>
          <input type="number" className="form-control" name="rating" />
        </div>
        <div className="mb-3">
          <label>Aprašymas</label>
          <input type="text" className="form-control" name="description" />
        </div>
        <button className="btn btn-primary">Pridėti</button>
      </form>
    </>
  );
};

export default NewKirpejas;
