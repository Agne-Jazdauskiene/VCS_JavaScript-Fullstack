import "./First.css";

import Button from "../components/first/button/Button.jsx";
import Logo from "../components/first/logo/Logo.jsx";
import Search from "../components/first/search/Search.jsx";
import Navigation from "../components/first/navigation/Navigation.jsx";

import Intro from "../components/first/intro/Intro.jsx";
import Cards from "../components/first/cards/Cards.jsx";

const First = () => {
  const data = [
    {
      title: "Instant Server Start",
      content: "On demand file serving over native ESM, no bundling required!",
    },
    {
      title: "Lightning Fast HMR",
      content:
        "Hot Module Replacement (HMR) that stays fast regardless of app size.",
    },
    {
      title: "Rich Features",
      content: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
    },
    {
      title: "Optimized Build",
      content:
        "Pre-configured Rollup build with multi-page and library mode support.",
    },
    {
      title: "Universal Plugins",
      content: "Rollup-superset plugin interface shared between dev and build.",
    },
    {
      title: "Fully Typed APIs",
      content: "Flexible programmatic APIs with full TypeScript typing.",
    },
  ];
  return (
    <>
      <main className="container">
        <header>
          <Logo />
          <Search />
          <Navigation />
        </header>

        <Intro />
        <Cards />
      </main>
    </>
  );
};

export default First;
