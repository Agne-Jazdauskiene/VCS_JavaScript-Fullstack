import "./App.css";
import logo from "./assets/react.svg";
import Button from "./components/button/Button.jsx"; // galima neprirasyti galunes .jsx

// Reacte funkcijos vadinsis Komponentais (Component) - butent komponentas is didziosios raides
function App() {
  //grazinamas turinys is musu komponento
  //JSX sintakse

  // kiekvienas komponentas privalo grazinti tik viena JSX elementa, t.y. tevinis vienas, pvz div
  // arba patalpintni i fragmenta vietoj div'o - <> </>
  //kabliataskiai nera butini

  //   return <div>
  //     <h1>Hello World</h1>;
  //     <h2>How are you?</h2>
  //     </div>
  // }
  return (
    <>
      <img src={logo} alt="react-logo" />
      <h1>Hello World</h1>
      <h2>How are you?</h2>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nulla
        pariatur ipsam assumenda, libero quo iusto! Officia ipsam, perspiciatis
        rerum alias veritatis numquam distinctio vel eos nostrum sapiente
        cupiditate voluptatum.
      </p>
      <Button />
    </>
  );
}

export default App;
