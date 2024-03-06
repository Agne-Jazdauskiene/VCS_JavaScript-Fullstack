import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <a href="#" className="nav-btn">
            Guide
          </a>
        </li>
        <li>
          {" "}
          <a href="#" className="nav-btn">
            Config
          </a>
        </li>
        <li>
          {" "}
          <a href="#" className="nav-btn">
            Plugins
          </a>
        </li>
        <li>
          {" "}
          <a href="#" className="nav-btn">
            Resources
          </a>
        </li>
        <li>
          <a href="#" className="nav-btn">
            Version
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
