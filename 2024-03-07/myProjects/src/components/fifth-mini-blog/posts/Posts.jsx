import { useState, useEffect } from "react";
import Post from "../post/Post";

const Posts = ({ reload }) => {
  const [data, setdata] = useSate([]);

  useEffect(() => {
    const localData = localStorage.getItem("data");

    if (!localData) return;

    setdata(JSON.parse(localData));
  }, [reoad]); //kad apsidraustume, jog nesuktu infinitive loopo - rasome []

  return (
    <>
      <h3>Posts</h3>
      <div className="row">
        {data.map((post, index) => (
          <Post data={post} key={index} />
        ))}
      </div>
    </>
  );
};

export default Posts;
