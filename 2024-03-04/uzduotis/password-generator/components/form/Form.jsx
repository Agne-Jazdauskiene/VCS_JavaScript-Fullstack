function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Form = () => {
  const handleSubmit = (e) => {
    //CREATE
    // sustabdyti standartini html formos veikima - naudosim preventDefault
    e.preventDefault();

    // console.log("veikia");

    const form = new FormData(e.target);
    // console.log(form.entries());

    for (const input of form.entries()) {
      console.log(input);
    }

    //Duomenu persiuntimas i serveri
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
          />
        </div>

        <div className="options d-flex align-items-center justify-content-center gap-5">
          <div className="mb-3">
            <span>Length</span>
            <input type="number" name="length" placeholder="Length" />
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
