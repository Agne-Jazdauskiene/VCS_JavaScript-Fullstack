// Slaptažodžių generatorius

// Sukurkite slaptažodžių generatorių pagal pateiktą maketą pasinaudojant react biblioteka.
// Veikiantis pavyzdys: https://1password.com/password-generator/
// Slaptažodžio generavimui priskirkite tris pasirinkimus:
// Ilgis, skaičiai ir simboliai.
// Pagal pasirinktus parametrus sugeneruokite atsitiktinį slaptažodį.

import { useState } from "react";
import Form from "../components/form/Form";
import "./App.css";

const App = () => {
  const [data, setData] = useState({
    password: "",
    length: "",
    numbers: "",
    symbols: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
    // virsuje setData( isspredinam data masyva-duomenis (pavadinimas ; reiksme)
  };

  return (
    <>
      <div></div>
      <Form />
    </>
  );
};

export default App;
