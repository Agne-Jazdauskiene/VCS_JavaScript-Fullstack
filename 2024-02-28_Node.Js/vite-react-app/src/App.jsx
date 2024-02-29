import "./App.css";
import Logo from "./components/logo/Logo.jsx";
import Search from "./components/search/Search.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Intro from "./components/intro/Intro.jsx";
import Cards from "./components/cards/Cards.jsx";

const App = () => {
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

export default App;
