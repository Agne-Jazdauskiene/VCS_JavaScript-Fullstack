import "./App.css";
import Logo from "./components/logo/Logo.jsx";
import Search from "./components/search/Search.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Intro from "./components/intro/Intro.jsx";
import Cards from "./components/cards/Cards.jsx";

const App = () => {
  return (
    <>
      <header>
        <Logo />
        <Search />
        <Navigation />
      </header>
      <main className="container">
        <Intro />
        <Cards />
      </main>
    </>
  );
};

export default App;
