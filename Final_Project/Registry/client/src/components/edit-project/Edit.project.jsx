import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const [form, setForm] = useState({});

  // Peradresavimo (redirect) kūrimas
  const navigate = useNavigate();
  // Reikšmės patalpintos url adrese paėmimas
  const { id } = useParams();

  useEffect(() => {
    // Duomenų iš localStorage paėmimas
    const localData = JSON.parse(localStorage.getItem("data"));

    // Patikrinimas ar jie buvo priskirti
    if (!localData) return;

    // Duomenų priskyrimas prie state'o, tam, kad formoje matytume anksčiau buvusias reikšmes
    setForm(localData[id]);
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
    // 4. Konvertuojame duomenis iš naujo
    // 5. Išsaugome duomenis
    const localData = JSON.parse(localStorage.getItem("data"));
    localData[id] = data;
    localStorage.setItem("data", JSON.stringify(localData));

    // Peradresavimo iniciavimas
    navigate("/");
  };

  return (
    <>
      <h1 className="mb-5">Redaguojamas projektas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Pavadinimas</label>
          <input
            type="text"
            className="form-control"
            name="project_name"
            defaultValue={form.project_name}
          />
        </div>
        <div className="mb-3">
          <label>Nuotrauka</label>
          <input
            type="text"
            className="form-control"
            name="photo"
            defaultValue={form.photo}
          />
        </div>
        <div className="mb-3">
          <label>Aprašymas</label>
          <input
            type="text"
            className="form-control"
            name="project_description"
            defaultValue={form.project_description}
          />
        </div>
        <div className="mb-3">
          <label>Siūloma svarstymo data</label>
          <input
            type="date"
            className="form-control"
            name="consideration_day"
            defaultValue={form.consideration_day}
          />
        </div>
        {/* <div className="mb-3">
          <label>Autorius</label>
          <input
            type="text"
            className="form-control"
            name="author"
            defaultValue={form.author}
          />
        </div> */}
        {/* <div className="mb-3">
          <label>Projekto statusas</label>
          <input
            type="text"
            className="form-control"
            name="status"
            defaultValue={form.status}
          />
        </div> */}

        <button className="btn btn-primary">Patvirtinti pakeitimus</button>
      </form>
    </>
  );
};

export default EditProject;
