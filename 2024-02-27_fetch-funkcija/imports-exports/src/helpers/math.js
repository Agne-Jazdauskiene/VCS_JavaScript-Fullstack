// const add = (a, b) => {
//   return a + b;
// };

// const deduct = (a, b ) {
//   return a- b;
// }

// const devide (a, b) {
//   return a / b;
// }

// const multiply = (a, b ) {
//   return a * b;
// }

// export { add, deduct, devide, multiply }; //objekte eksportuosiu funkcija sum
// export { add, deduct, devide, multiply as devide}; //objekte eksportuosiu funkcija sum


// ARBA salia export rasom. prikl. nuo situacijos, kuri var.naudoti
// export const add = (a, b) => {
//   return a + b;
// };

// export const deduct = (a, b ) {
//   return a- b;
// }

// export const devide = (a, b) {
//   return a / b;
// }

// export const multiply = (a, b ) {
//   return a * b;
// }

// export { add, deduct, devide, multiply }; //tada sito nenaudojam

//ARBA

const display = (result) => {
  console.log(result)
}

export const add = (a, b) => {
  display a + b;
};

export const deduct = (a, b ) {
  display a- b;
}

export const devide (a, b) {
  display a / b;
}

export const multiply = (a, b ) {
  display a * b;
}

// tuomet js faile rasysim be console.log, bet add, deduct, ...
// prie import nerasom display