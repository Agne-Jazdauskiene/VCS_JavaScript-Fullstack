import "./Header.css";
import Search from "../search/Search.jsx";
import Logo from "../logo/Logo.jsx";
import Socials from "../socials/Socials.jsx";
import Nav from "../nav/Nav.jsx";

const Header = () => {
  return (
    <div className=" header d-flex justify-content-between">
      <Search />
      <Logo />
      <div className="d-flex gap-5">
        <Socials />
        <Nav />
      </div>
    </div>
  );
};

export default Header;
