import { useState } from "react";

const Input = () => {
  // State'o sukurimas
  const [fieldValue, setFieldValue] = useState();

  // Event'o funkcijos registracija
  const handleChange = (e) => {
    //Laukelyje ivestos reiksmes priskyrimas prie state'o ir komponento atnaujinimas
    setFieldValue(e.target.value);
  };

  return (
    <>
      <h2>Laukelio reiksme</h2>
      <input type="text" onChange={handleChange} />
      <div>{fieldValue}</div>
    </>
  );
};

export default Input;
