import { useState } from "react";
import "./App.css";
import Form from "../components/form/Form";

// update formos sablonas
const App = () => {
  // const [name, setName] = useState();
  // const [topic, setTopic] = useState();
  // const [message, setMessage] = useState();
  //kiekv.state'o sukurimas ryja daug resursu. reikia optimizuoti

  const [data, setData] = useState({
    name: "",
    topic: "",
    message: "",
  });

  // viska talpinsime objekte
  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
    // virsuje setData( isspredinam data masyva-duomenis (pavadinimas ; reiksme)
  };

  // CRUD aplikacija: create, read, update, delete
  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Įveskite savo vardą"
            // onChange={(e) => setName(e.target.value)}
            name="name" //hey'jus
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Įveskite temą"
            // onChange={(e) => setTopic(e.target.value)}
            name="topic"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            type="text"
            className="form-control"
            placeholder="Įveskite zinute"
            // onChange={(e) => setMessage(e.target.value)}
            name="message"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>Vardas: {data.name}</div>
        <div>Tema: {data.topic}</div>
        <div>Zinute: {data.message}</div>
      </form>
      <Form />
    </>
  );
};

export default App;
