function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
import { useState, useEffect } from "react";

const Form = () => {
  const [password, setPassword] = useState("");

  const [PasswordList, setPasswordList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("data");
    if (!data) return;
    data = JSON.parse(data);
    setPasswordList(data);
  }, [loading]);

  const handleSubmit = (e) => {
    //CREATE
    // sustabdyti standartini html formos veikima - naudosim preventDefault
    e.preventDefault();

    // console.log("veikia");

    const form = new FormData(e.target);
    // console.log(form.entries());
    const data = {};

    for (const input of form.entries()) {
      // console.log(input);
      data[input[0]] = input[1];
    }
    // console.log(data);
    //Duomenu persiuntimas i serveri

    let letters = "abcdefghijklmnopqrstuvwxyz";
    let symbol = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
    const finalPassword = [];

    for (let x = 0; x < data.length; x++) {
      const temp = [];
      if (data.numbers === "on") {
        temp.push(rand(0, 9));
      }
      if (data.symbols === "on") {
        temp.push(symbol[rand(0, 28)]);
      }
      if (rand(0, 1) === 0) temp.push(letters[rand(0, 25)]);
      else temp.push(letters[rand(0, 25)].toUpperCase());
      // temp.push(letters[rand(0, 25)]);

      let character = temp[rand(0, temp.length - 1)];
      console.log(temp);

      // let letter = letters[rand(0, 25)];
      finalPassword.push(character);
    }
    console.log(finalPassword);
    setPassword(finalPassword.join(""));

    const localData = localStorage.getItem("data");

    if (localData) {
      //Papildymas
      let convertedData = JSON.parse(localData);
      convertedData.push(finalPassword.join(""));
      convertedData = JSON.stringify(convertedData);
      localStorage.setItem("data", convertedData);
    } else {
      // Sukūrimas
      localStorage.setItem(
        "(finalPassword.join(''))",
        JSON.stringify([finalPassword.join("")])
      );
    }

    setLoading(!loading);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h3 className="mb-3">
          Need a password? Try the 1Password Strong Password Generator.
        </h3>
        <p>Generate secure, random passwords to stay safe online</p>
        <p>Generated password</p>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="password"
            placeholder="Password"
            value={password}
            disabled={true}
          />
        </div>

        <div className="options d-flex align-items-center justify-content-center gap-5">
          <div className="mb-3 col-sm">
            <span>Length</span>
            <input type="number" name="length" defaultValue={8} />
          </div>
          <div className="mb-3">
            <input type="checkbox" name="numbers" />
            <p>Numbers</p>
          </div>
          <div className="mb-3">
            <input type="checkbox" name="symbols" />
            <p>Symbols</p>
          </div>

          <button className="btn btn-primary">Generate</button>
        </div>
      </div>
    </form>
  );
};

export default Form;

// sausio 29 d uzd.
// let stringas = 'abcdefghijklmnopqrstuvwxyz'
// console.log(stringas.length)
// // stringas = rand(0, 26)
// console.log(stringas[rand(0,26)], stringas[rand(0,26)], stringas[rand(0,26)]);
// document.write(`<p>${stringas[rand(0,26)]} ${stringas[rand(0,26)]} ${stringas[rand(0,26)]}</p>`)

// for (let i = 0; i < data.passwordLength; i++) {
//   // console.log("loop")
//   const temp = [];
//   data.numbers === 'on' && temp.push(rand(0, 9));
//   data.symbols === 'on' && temp.push(symbolarray[rand(0, 31)]);
//   if (rand(0, 1) === 0) temp.push(letterArray[rand(0, 25)]);
//   else temp.push(letterArray[rand(0, 25)].toUpperCase());
//   passwordArray.push(temp[rand(0, temp.length-1)]);
