import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First.jsx";
import SecondShoppList from "./pages/SecondShoppList.jsx";
import ThirdCalculator from "./pages/ThirdCalculator.jsx";
import FourthtPasswGen from "./pages/FourthtPasswGen.jsx";
import FifthMiniBlog from "./pages/FifthMiniBlog.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/second-shopp-List" element={<SecondShoppList />} />
            <Route path="/third-calculator" element={<ThirdCalculator />} />
            <Route
              path="/fourth-password-generator"
              element={<FourthtPasswGen />}
            />
            <Route path="/fifth-mini-blog" element={<FifthMiniBlog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
