function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
import { useState } from "react";
import "./App.css";

function App() {
  const generatePasword = (e) => {
    e.preventDefault();
    // console.log("veikia");
    const formData = new FormData(e.target);
    const data = {}; //objektas

    // console.log(formData.values());

    for (const input of formData.entries()) {
      data[input[0]] = input[1];
    }

    // console.log(data);

    let letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";

    if (data.numbers) {
      letters += numbers;
    }

    if (data.symbols) {
      letters += symbols;
    }
    let result = "";
    for (let i = 0; i < data.length; i++) {
      result += letters[rand(0, letters.length - 1)];
    }
  };

  setPassword(result);
  return (
    <>
      <h1>Password Generator</h1>
      {password && <div className="generatedPassword">{password}</div>}

      <form
        className="d-flex gap-5 mt-3 align-items-center"
        onSubmit={generatePasword}
      >
        <div className="">
          <input
            type="number"
            defaultValue="20"
            className="form-control"
            name="length"
          />
        </div>
        <div className="d-flex gap-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="numbers"
            name="numbers"
          />
          {/* //propsas htmlFor */}
        </div>
        <label htmlFor="numbers">Numbers</label>
        <div className="d-flex gap-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="numbers"
            name="symbols"
          />
          {/* //propsas htmlFor */}
        </div>
        <label htmlFor="numbers">Symbols</label>
        <button className="btn btn-primary">Generate</button>
      </form>
    </>
  );
}

export default App;
