import "./Intro.css";
import logo from "./logo.svg";
import Button from "../button/Button";

const Intro = () => {
  return (
    <>
      <div className="textBtns">
        <div className="text">
          <p>Vite</p>
          <p>Next Generation Frontend Tooling</p>
          <p>
            Get ready for a development environment that can finally catch up
            with you.
          </p>
        </div>
        <div className="btns">
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
      <div className="image">
        <img src={logo} alt="vite logo" />
      </div>
    </>
  );
};

export default Intro;
