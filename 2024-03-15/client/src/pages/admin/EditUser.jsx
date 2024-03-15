import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [form, setForm] = useState({});

  // Peradresavimo (redirect) kūrimas
  const navigate = useNavigate();
  // Reikšmės patalpintos url adrese paėmimas
  const { indentifikatorius } = useParams();

  useEffect(() => {
    // Vartotojo duomenų paėmimas
    fetch('http://localhost:3000/users')
       .then(resp => resp.json())
        // Duomenų priskyrimas prie state'o    
       .then(resp => setData(resp));
  }, [loader]);

  // Formos duomenų įrašymas
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/users/' + id, {
        method: 'PUT',
        // body: new FormData(e.target)
    })
    .then(resp => resp.text())
    .then(resp => {
        console.log(resp);

    //Vartotojo iššsaugojimas

    // Peradresavimo iniciavimas
    navigate("/admin");
  }

  return (
    <>
      <h1>Vartotojo redagavimas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Vardas</label>
          <input
            type="text"
            className="form-control"
            name="title"
            // Reikšmės atvaizdavimas laukelyje
            defaultValue={form.name}
          />
        </div>
        <div className="mb-3">
          <label>Pavardė</label>
          <input
            type="text"
            className="form-control"
            name="photo"
            // Reikšmės atvaizdavimas laukelyje
            defaultValue={form.last_name}
          />
        </div>
        <div className="mb-3">
          <label>El. pašto adresas</label>
          <input
            type="number"
            className="form-control"
            name="price"
            // Reikšmės atvaizdavimas laukelyje
            defaultValue={form.email}
          />
        </div>
        <div className="mb-3">
          <label>Slaptažodis</label>
          <input
            type="number"
            className="form-control"
            name="qty"
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
