import { useState } from "react";

const Calculator2 = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div>
        <button value="0" onClick={(e) => setValue(value + e.target.value)}>
          0
        </button>
        <button value="1" onClick={(e) => setValue(value + e.target.value)}>
          1
        </button>
        <button value="2" onClick={(e) => setValue(value + e.target.value)}>
          2
        </button>
        <button value="3" onClick={(e) => setValue(value + e.target.value)}>
          3
        </button>
        <button value="4" onClick={(e) => setValue(value + e.target.value)}>
          4
        </button>
        <button value="5" onClick={(e) => setValue(value + e.target.value)}>
          5
        </button>
        <button value="6" onClick={(e) => setValue(value + e.target.value)}>
          6
        </button>
        <button value="7" onClick={(e) => setValue(value + e.target.value)}>
          7
        </button>
        <button value="8" onClick={(e) => setValue(value + e.target.value)}>
          8
        </button>
        <button value="9" onClick={(e) => setValue(value + e.target.value)}>
          9
        </button>
      </div>
      <div>
        <button value="+" onClick={(e) => setValue(value + e.target.value)}>
          +
        </button>
        <button value="-" onClick={(e) => setValue(value + e.target.value)}>
          -
        </button>
        <button value="/" onClick={(e) => setValue(value + e.target.value)}>
          /
        </button>
        <button value="*" onClick={(e) => setValue(value + e.target.value)}>
          *
        </button>
        <button onClick={(e) => setValue(eval(value))} value="=">
          =
        </button>
      </div>
      <form>
        <input type="text" value={value} />
      </form>
    </>
  );
};
export default Calculator2;
