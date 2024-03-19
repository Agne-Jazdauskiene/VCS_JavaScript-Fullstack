import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [form, setForm] = useState({});
  const [loader, setLoader] = useState(false);

  // Peradresavimo (redirect) kūrimas
  const navigate = useNavigate();
  // Reikšmės patalpintos url adrese paėmimas
  const { indentifikatorius } = useParams();

  useEffect(() => {
    // Vartotojo duomenų paėmimas
    fetch("http://localhost:3000/users/" + indentifikatorius)
      .then((resp) => resp.json())
      // Duomenu priskyrimas prie state`o
      .then((resp) => {
        console.log(resp);
        setForm(resp);
      });
  }, [loader]);

  // Formos duomenų įrašymas
  const handleSubmit = (e) => {
    e.preventDefault();

    //Vartotojo iššsaugojimas
    fetch("http://localhost:3000/users/" + indentifikatorius, {
      method: "PUT",
      body: new FormData(e.target),
    })
      .then((resp) => resp.text())
      .then((resp) => {
        console.log(resp);

        // Peradresavimo iniciavimas
        navigate("/admin");
        setLoader(!loader);
      });
  };

  return (
    <>
      <h1>Vartotojo redagavimas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Vardas</label>
          <input
            type="text"
            className="form-control"
            name="name"
            // Reikšmės atvaizdavimas laukelyje
            defaultValue={form.name}
          />
        </div>
        <div className="mb-3">
          <label>Pavardė</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            // Reikšmės atvaizdavimas laukelyje
            defaultValue={form.last_name}
          />
        </div>
        <div className="mb-3">
          <label>El. pašto adresas</label>
          <input
            type="email"
            className="form-control"
            name="email"
            // Reikšmės atvaizdavimas laukelyje
            defaultValue={form.email}
          />
        </div>
        <div className="mb-3">
          <label>Slaptažodis</label>
          <input
            type="password"
            className="form-control"
            name="password"
            // Reikšmės atvaizdavimas laukelyje
            defaultValue={form.password}
          />
        </div>
        <button className="btn btn-primary">Pridėti</button>
      </form>
    </>
  );
};

export default EditProduct;
