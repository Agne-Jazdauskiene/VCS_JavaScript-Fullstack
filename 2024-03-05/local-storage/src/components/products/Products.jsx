import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Duomenu paemimas is localStorage
    //Patikrinsime, ar yra reiksme, t.y. ar negautas null rezultatas
    // Konvertuojame duomenis is JSON stringo
    // Konvertuotus duomenis priskirsime prie state'o

    let data = localStorage.getItem("data");

    if (!data) return;

    data = JSON.parse(data);
    setProducts(data);
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault(); //sustabdome refresha, kad automatiskai jis neivyktu. Visada irassyti

    const formData = new FormData(e.target);
    const data = {};

    for (const input of formData.entries()) {
      data[input[0]] = input[1];
    }

    // console.log(JSON.stringify[data]); //konvertuoja i jsono stringa

    // Tirkirname, ar duomenys jau buvo issaugoti
    // Jeigu taip, tuomet zinome, kad ten patalpinome masyva
    //I masyva galime deti papildomu produktu
    // Jeigu duomenys nebuvo issaugoti
    //Kuriame nauja masyva su vienu produktu

    const localData = localStorage.getItem("data");

    if (localData) {
      //Papildymas
      //Veiksmu seka:
      //1. Konvertuojame stringa is JSON formato
      //2. Papildome masyva
      //3. Konvertuojame masyva atgal i JSON stringa
      //4.Issaugome stringa localStorage
      let convertedData = JSON.parse(localData);
      convertedData.push(data);
      convertedData = JSON.stringify(convertedData);
      localStorage.setItem("data", convertedData);
    } else {
      localStorage.setItem("data", JSON.stringify([data]));
    }

    setLoading(!loading);
  };

  return (
    <>
      <h1>Products</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Photo</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((data) => (
            <tr>
              <td>{data.tiitle} </td>
              <td>
                {data.photo} style=
                {{
                  maxWidth: 100,
                }}
              </td>
              <td>{data.price} </td>
              <td>{data.qty} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Produkto pavadinimas</label>
          <input type="text" className="form-control" name="title" />
        </div>

        <div className="mb-3">
          <label>Produkto nuotrauka</label>
          <input type="text" className="form-control" name="photo" />
        </div>

        <div className="mb-3">
          <label>Produkto kaina</label>
          <input type="number" className="form-control" name="price" />
        </div>

        <div className="mb-3">
          <label>Kiekis sandėlyje</label>
          <input type="number" className="form-control" name="qty" />
        </div>
        <button className="btn btn-primary">Pridėti</button>
      </form>
    </>
  );
};

export default Products;
