import { useState, useEffect } from "react";

const Posts = ({ reload }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("posts");

    if (!data) return;

    setData(JSON.parse(data));
  }, [reload]);

  return (
    <>
      {data.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </>
  );
};

export default Posts;
