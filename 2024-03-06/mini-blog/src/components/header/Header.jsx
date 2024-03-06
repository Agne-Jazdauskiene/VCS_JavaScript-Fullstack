import "./Header.css";
import Search from "../search/Search";
import Logo from "../logo/Logo";
import Socials from "../socials/Socials";
import Nav from "../nav/Nav";

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
