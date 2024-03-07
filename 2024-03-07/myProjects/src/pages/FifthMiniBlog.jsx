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
import Header from "../components/fifth-mini-blog/header/Header.jsx";
import NewPost from "../components/fifth-mini-blog/newPost/NewPost.jsx";
import Posts from "../components/fifth-mini-blog/posts/Posts.jsx";
// import "./App.css";

function FifthMiniBlog() {
  const [reload, setReload] = useState(false);

  return (
    <>
      <Header />
      <Posts reload={reload} />
      <NewPost setReload={setReload} />
    </>
  );
}

export default FifthMiniBlog;
