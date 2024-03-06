import { useState, useEffect } from "react";
import Products from "./components/products/Products";
import "./App.css";

function App() {
  const [value, setValue] = useState();

  useEffect(() => {
    // Informacijos paėmimas iš localStorage vos tik užsikrovus komponentui
    setValue(localStorage.getItem("text"));
  }, []);

  const setLocalValue = (e) => {
    // Informacijos talpinimas į lokalų podėlį (localStorage)

    localStorage.setItem("text", "Hello World");
  };

  const getLocalValue = (e) => {
    setValue(localStorage.getItem("text"));
  };

  return (
    <>
      <h1>Local Storage</h1>
      <div className="my-3">{value}</div>
      <div className="d-flex gap-3 justify-content-center mb-5">
        <button className="btn btn-primary" onClick={setLocalValue}>
          Set Local Value
        </button>
        <button className="btn btn-primary" onClick={getLocalValue}>
          Get Local Value
        </button>
      </div>
      {/* Produktų komponentas */}
      <Products />
    </>
  );
}

export default App;

// function App() {
//   const [value, setValue] = useState();
//   // const [state1, setValue] = useState();
//   useEffect(
//     () => {
//       //tai yra funkcija, kuria noresim aktyvuoti
//       //visus veiksmus, kuriuos norim aktyvuoti, dedam i useEffect'a
//       setValue(localStorage.getItem("text"));
//     }
//     // [state1]
//   );

//   const setLocalValue = (e) => {
//     // INformacijos talpinimas i lokalų podėlį (localStorage)
//     // console.log("veikia");

//     // console.log(localStorage);
//     localStorage.setItem("text", "Hello World");
//   };

//   const getLocalValue = (e) => {
//     setValue(localStorage.getItem("text"));
//   };
//   return (
//     <>
//       <h1>Local Storage</h1>
//       <div className="my-3">{value}</div>
//       <button className="btn btn-primary" onClick={setLocalValue}>
//         Set Local Value
//       </button>
//       <button className="btn btn-primary" onClick={getLocalValue}>
//         Get Local Value
//       </button>

//       {/* Produktu komponentas */}
//       <Products />
//     </>
//   );
// }

// export default App;