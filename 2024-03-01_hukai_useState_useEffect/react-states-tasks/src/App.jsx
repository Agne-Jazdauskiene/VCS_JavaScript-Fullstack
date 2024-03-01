// React States

// Pirma užduotis
// Sukurkite komponentą pavadinimu "Quantity" ir priskirkite state'ą qty. Komponente atvaizduokite tris elementus:
// Minuso ikoną,
// Elementą kuriame atvaizduojama qty reikšmė.
// Pliuso ikoną
// Užregistruokite paspaudimo įvykius ikonoms pagal atitinkamą simbolį. Paspaudus ant elemento padidinkite arba pamažinkite qty reikšmę. T.y. +1 arba -1.

// Antra užduotis
// Sukurkite pirmos užduoties event’o funkcijų validaciją
// qty reikšmė negali būti mažesnė nei 0 ir didesnė nei 100.

import "./App.css";
import Quantity from "./components/quantity/Quantity";

function App() {
  return (
    <>
      <Quantity />
    </>
  );
}

export default App;

// import Quantity from './components/quantity/Quantity'
// import './App.css'

// function App() {

//   return (
//     <>
//      <Quantity/>
//     </>
//   )
// }

// export default App
