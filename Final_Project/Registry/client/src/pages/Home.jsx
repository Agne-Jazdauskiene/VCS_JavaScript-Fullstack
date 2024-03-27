import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/Main.jsx";
import axios from "axios";
import Project from "../components/project/Project.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showNewProject, setUser } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    //kai useris prisijungia - tada rodo projektus
    axios
      .get("http://localhost:3000/projects/")
      .then((resp) => setData(resp.data))
      .catch((err) => {
        if (err.response.status === 401) {
          setUser(false);
          navigate("/login");
        }
      });
  }, [showNewProject, loading]);

  return (
    <>
      <h1 className="mb-5">Seimo narių darbotvarkės registras</h1>
      {/* <button className="btn btn-primary">Prisijungti</button> */}
      {/* <Link to={"/login/"}>AAAAAAA</Link> */}

      {data.map((project) => (
        <Project data={project} setLoading={setLoading} key={project._id} />
      ))}
    </>
  );
};

export default Home;
