import { useState, useEffect } from "react";

const Kirpejas = () => {
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
            <div className="phone">Tel. Nr. {product.phone}</div>
            <div className="email"> El. p. {product.email}</div>
            <div className="price">Kaina {product.price} €</div>
            <div className="rating">Įvertinimas {product.rating}/10</div>
            <div className="description"> {product.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Kirpejas;
