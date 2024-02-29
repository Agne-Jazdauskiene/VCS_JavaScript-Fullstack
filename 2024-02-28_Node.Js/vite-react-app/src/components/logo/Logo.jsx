import logo from "../../assets/logo.svg";
import "./Logo.css";

const Logo = () => {
  return (
    <a className="logo-button" href="#">
      <img src={logo} alt="vite logo" />
      Vite
    </a>
  );
};

export default Logo;
