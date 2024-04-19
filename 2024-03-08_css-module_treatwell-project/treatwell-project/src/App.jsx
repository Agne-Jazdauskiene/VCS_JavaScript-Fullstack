// Treatwell

// Sukurkite kirpėjų svetainę pasinaudodami react biblioteka. Duomenys saugomi localStorage
// Aplikacijoje yra dvi sritys:
// Administracinė ir Vieša

// Viešoje srityje vartotojas gali matyti kirpėjų sąrašą kuriame atvaizduojama informacija:
// Nuotrauka,
// Vardas,
// Telefono numeris

// Paspaudus ant norimo žmogaus atvaizduojama informacija:
// Nuotrauka,
// Vardas,
// Telefono numeris,
// El. paštas,
// Valandinis įkainis
// Įvertinimas
// Aprašymas

// Administracinėje srityje administratorius taipogi mato kirpėjų sąrašą. Sukurkite funkcionalumą leidžiantį administratoriui:
// Pridėti naują kirpėją,
// Redaguoti esamą kirpėją,
// Ištrinti kirpėją

// Prieš ištrynimą vartotojas turi matyti patvirtinimo žinutę:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm

// PAPILDOMAI:
// Viešoje srityje sukurkite filtrą leidžiantį ieškoti kirpėjo pagal jo vardą.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../treatwell-project/src/pages/user/Home";
import Admin from "./pages/admin/Admin";
import NewKirpejas from "../../treatwell-project/src/pages/admin/NewKirpejas";
import EditKirpejas from "./pages/admin/EditKirpejas";
import Kirpejas from "./pages/user/Kirpejas";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/new-kirpejas" element={<NewKirpejas />} />
          <Route
            path="/admin/edit-kirpejas/:indentifikatorius"
            element={<EditKirpejas />}
          />
          <Route path="/user/kirpejas" element={<Kirpejas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
