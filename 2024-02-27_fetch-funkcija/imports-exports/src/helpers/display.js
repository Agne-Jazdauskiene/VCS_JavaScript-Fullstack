export const formatString = (string) => {
  return "<h1>${string}</h1>";
};

export const displayString = (string) => {
  document.querySelector("result").innerHTML = string;
};
//export {formatString, displayString}

export default displayString;
