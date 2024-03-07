import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      {/* <h3>https://www.delfi.lt/lietuva/naujienos/?referer=google&ad=gemius</h3>
      <p>https:// (http://) - Protokolas</p>
      <p>127.0.0.1 - Lokalus Ip adresas</p>
      <p>delfi.lt - domenas (domain) </p>
      <p>www - subdomenas (subdomain)</p>
      <p>
        /lietuva/naujienos/ - parametrai. Pvz. du parametrai: lietuva, naujienos
      </p>
      <p>
        ?referer=google&ad=gemius - query parametrai. Pvz. du parametrai key:
        referer = google, key: ad=gemius
      </p>
      <h3>http://localhost:5174/ - tas pats, kas IP adresas</h3>
      <p>:5174 - portas (port) ju yra daug, kai kurie g.b. uzimti ir t.t.</p>
      <p>mes naudosime https://reactrouter.com/en/main</p> */}

      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
