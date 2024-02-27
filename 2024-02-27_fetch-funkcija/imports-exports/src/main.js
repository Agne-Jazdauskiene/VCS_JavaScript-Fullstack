import { add, deduct, devide, multiply } from "./helpers/math.js";
import { add as additionalAdd } from "./helpers/additionalMaths.js";
import atvaizduotiStringa, { formatStringString } from "./helpers/display.js"; // jei turime defaultine reiksme - galime uzsivadinti kaip norim, pvz. atvaizduotiStringa

// Veiksmu igyvendinimas
// Skriptas (visas execusenas)

// console.log(add(10, 25));
// console.log(deduct(10, 25));
// console.log(devide(10, 25));
// console.log(multiply(10, 25));

// jei maths.js panaudota const display
add(10, 25);
deduct(10, 25);
devide(10, 25);
multiply(10, 25);

console.log(additionalAdd(100, 300));

atvaizduotiStringa("Hello world");
