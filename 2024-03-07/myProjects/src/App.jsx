import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First.jsx";
import SecondShoppList from "./pages/SecondShoppList.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/Second-Shopp-List" element={<SecondShoppList />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
