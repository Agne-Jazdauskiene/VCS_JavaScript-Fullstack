const [form, setForm] = useState({});
const [message, setMessage] = useState();

const navigate = useNavigate();

const { identify } = useParams();

useEffect(() => {
  // Vartotojo duomenų paėmimas
  // AXIOS UŽKLAUSOS FORMAVIMAS
  axios
    .get("http://localhost:3000/posts/" + identify) // Pagal posto ID
    .then((resp) => setForm(resp.data))
    .catch((err) => setMessage(err.response.data));
}, []);

// Formos duomenų įrašymas
const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  //Ivesti posto ID (put)
  axios
    .put("http://localhost:3000/posts/" + identify, formData)
    .then((resp) => navigate("/"))
    .catch((err) => setMessage(err.response.data));
};

return (
  <>
    <h1>Iraso redagavimas</h1>
    {message && <div className="alert alert-danger">{message}</div>}

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Projekto pavadinimas</label>
        <input
          type="text"
          className="form-control"
          name="project_name"
          // Reikšmės atvaizdavimas laukelyje
          defaultValue={form.project_name}
        />
      </div>
      <div className="mb-3">
        <label>Nuotrauka</label>
        <input
          type="file"
          className="form-control"
          name="photo"
          defaultValue={form.photo}
        />
      </div>
      <div className="mb-3">
        <label>Projekto aprasymas</label>
        <input
          type="text"
          className="form-control"
          name="last_name"
          // Reikšmės atvaizdavimas laukelyje
          defaultValue={form.description}
        />
      </div>
      <div className="mb-3">
        <label>Talpinimo data ir laikas</label>
        <input
          type="date"
          className="form-control"
          name="date"
          // Reikšmės atvaizdavimas laukelyje
          defaultValue={form.date}
        />
      </div>
      <div className="mb-3">
        <label>Norima svarstymo data</label>
        <input
          type="date"
          className="form-control"
          name="resolution_date"
          // Reikšmės atvaizdavimas laukelyje
          defaultValue={form.resolution_date}
        />
      </div>
      <button className="btn btn-primary">Pridėti</button>
    </form>
  </>
);
