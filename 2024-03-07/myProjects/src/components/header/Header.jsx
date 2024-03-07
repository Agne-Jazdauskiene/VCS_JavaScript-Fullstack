import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Vite-Home</Link>
            </li>
            <li>
              <Link to="/second-shopp-List">Shopping List</Link>
            </li>
            <li>
              <Link to="/third-calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/fourth-password-generator">Password Generator</Link>
            </li>
            <li>
              <Link to="/fifth-mini-blog">Mini Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
