import "./Button.css";

//komponentas = funkcija
// propsas = priimam kaip parametra
const Button = (props) => {
  // console.log(props);
  return <button>{props.text}</button>;
};

export default Button;
