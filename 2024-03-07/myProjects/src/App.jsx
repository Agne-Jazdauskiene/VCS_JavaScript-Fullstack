import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First.jsx";
import SecondShoppList from "./pages/SecondShoppList.jsx";
import ThirdCalculator from "./pages/ThirdCalculator.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/second-shopp-List" element={<SecondShoppList />} />
            <Route path="/third-calculator" element={<ThirdCalculator />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
