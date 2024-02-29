import "./Button.css";

//Komponentas = funkcija
//Propsas = parametras
const Button = (props) => {
  // const Button = ({style, showIcon, text, children}) => { arba taip irasyti
  //props yra objektas
  // const { style, showIcon, text, children } = props; tuomet nuvalyti props apacioje prie button
  // console.log(props);
  return (
    <button className={props.style}>
      {props.showIcon && <span>🎉</span>}
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;
