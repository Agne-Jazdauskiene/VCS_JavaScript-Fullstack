import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data"));

    if (localData) setData(localData);
  }, []);

  return (
    <>
      <h1>Pasirinkite kirpėją</h1>
      <div className="row mt-5">
        {data.map((product) => (
          <div className="col-3">
            <div className="image px-5">
              <img src={product.photo} style={{ maxWidth: "100%" }} />
            </div>
            <h4>{product.name}</h4>
            <div className="phone"> Tel. Nr. {product.phone}</div>
            <Link to="/user/kirpejas" className="btn btn-success">
              Išsamiau
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
