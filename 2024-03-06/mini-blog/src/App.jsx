// Pagal pateiktą maketą sukurkite mini tinklaraštį.
// Veikiantis pavyzdys: https://preview.colorlib.com/theme/magdesign/
// Duomenys talpinami localStorage.
// Naudojami komponentai:
// Header
// Search
// Logo
// Socials
// Nav
// Posts
//  Post
// NewPost

// Kuriant naują įrašą naudojama NewPost komponento forma.
// Paspaudus mygtuką submit patalpintas įrašas atvaizduojamas sąraše.
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import NewPost from "./components/newPost/NewPost";
import Posts from "./components/posts/Posts";
import "./App.css";

function App() {
  const [reload, setReload] = useState(false);

  return (
    <>
      <Header />
      <Posts reload={reload} />
      <NewPost setReload={setReload} />
    </>
  );
}

export default App;
