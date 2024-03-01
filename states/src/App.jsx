import Button from "./components/button/Button";
import AlternativeButton from "./components/alternative-button/AlternativeButton";
import Input from "./components/input/Input";
import IdButton from "./components/id-buttons/IdButtons";
import "./App.css";

const App = () => {
  console.log("App komponentas uzd4tas");

  return (
    <>
      <Button />
      <AlternativeButton />
      <Input />
      <IdButton />
    </>
  );
};

export default App;
