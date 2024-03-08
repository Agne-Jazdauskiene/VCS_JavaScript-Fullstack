import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditKirpejas = () => {
  const [form, setForm] = useState({});

  // Peradresavimo (redirect) kūrimas
  const navigate = useNavigate();
  // Reikšmės patalpintos url adrese paėmimas
  const { indentifikatorius } = useParams();

  useEffect(() => {
    // Duomenų iš localStorage paėmimas
    const localData = JSON.parse(localStorage.getItem("data"));

    // Patikrinimas ar jie buvo priskirti
    if (!localData) return;

    // Duomenų priskyrimas prie state'o, tam, kad formoje matytume anksčiau buvusias reikšmes
    setForm(localData[indentifikatorius]);
  }, []);

  // Formos duomenų įrašymas
  const handleSubmit = (e) => {
    e.preventDefault();

    // Formos duomenų paėmimo pradžia
    const formData = new FormData(e.target);
    const data = {};

    for (const input of formData.entries()) {
      data[input[0]] = input[1];
    }

    // Formos duomenų paėmimo pabaiga

    // 1. Paimame duomenis iš localStorage
    // 2. Konvertuojam duomenis
    // 3. Redaguojame duomenis
    // 4. Konvertuojame duomenis iš naujos
    // 5. Išsaugojame duomenis
    const localData = JSON.parse(localStorage.getItem("data"));
    localData[indentifikatorius] = data;
    localStorage.setItem("data", JSON.stringify(localData));

    // Peradresavimo iniciavimas
    navigate("/admin");
  };

  return (
    <>
      <h1>Naujas Kirpėjas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Kirpėjo nuotrauka</label>
          <input
            type="text"
            className="form-control"
            name="photo"
            defaultValue={form.photo}
          />
        </div>
        <div className="mb-3">
          <label>Kirpėjo vardas</label>
          <input
            type="text"
            className="form-control"
            name="name"
            defaultValue={form.name}
          />
        </div>
        <div className="mb-3">
          <label>Telefono numeris</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            defaultValue={form.phone}
          />
        </div>
        <div className="mb-3">
          <label>El. paštas</label>
          <input
            type="text"
            className="form-control"
            name="email"
            defaultValue={form.email}
          />
        </div>
        <div className="mb-3">
          <label>Valandinis įkainis</label>
          <input
            type="number"
            className="form-control"
            name="price"
            defaultValue={form.price}
          />
        </div>
        <div className="mb-3">
          <label>Įvertinimas</label>
          <input
            type="number"
            className="form-control"
            name="rating"
            defaultValue={form.rating}
          />
        </div>
        <div className="mb-3">
          <label>Aprašymas</label>
          <input
            type="text"
            className="form-control"
            name="description"
            defaultValue={form.description}
          />
        </div>
        <button className="btn btn-primary">Pridėti</button>
      </form>
    </>
  );
};

export default EditKirpejas;
