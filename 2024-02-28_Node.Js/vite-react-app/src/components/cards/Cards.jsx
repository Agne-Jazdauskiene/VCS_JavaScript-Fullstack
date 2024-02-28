import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <p className="cardTitle">Instant Server Start</p>
        <p className="cardText">
          On demand file serving over native ESM, no bundling required!
        </p>
      </div>
      <div className="card">
        <p className="cardTitle">Lightning Fast HMR</p>
        <p className="cardText">
          Hot Module Replacement (HMR) that stays fast regardless of app size.
        </p>
      </div>
      <div className="card">
        <p className="cardTitle">Rich Features</p>
        <p className="cardText">
          Out-of-the-box support for TypeScript, JSX, CSS and more.
        </p>
      </div>
      <div className="card">
        <p className="cardTitle">Optimized Build</p>
        <p className="cardText">
          Pre-configured Rollup build with multi-page and library mode support.
        </p>
      </div>
      <div className="card">
        <p className="cardTitle">Universal Plugins</p>
        <p className="cardText">
          Rollup-superset plugin interface shared between dev and build.
        </p>
      </div>
      <div className="card">
        <p className="cardTitle">Fully Typed APIs</p>
        <p className="cardText">
          Flexible programmatic APIs with full TypeScript typing.
        </p>
      </div>
    </div>
  );
};

export default Cards;
