import multer from "multer";
// import fs from "fs/promises";
import { access, mkdir } from "node:fs/promises";

//Multer diskstorage inicijavimas
const storage = multer.diskStorage({
  //Nurodymas, kur failai bus saugomi
  destination: async (req, file, next) => {
    //Direktorijos pavadinimas
    const fileDir = "./uploads";
    //Nurodomas direktorijos pavadinimas, kur bus saugomi failai

    try {
      // Tikriname, ar ivyks klaida, t.y. ar direktorija egzistuoja. Jeigu ne - issaukiama klaida ir pereinama prie catch bloko
      await access(fileDir);
      // console.log("Klaidos nėra");
    } catch (error) {
      // error gali buti arba gali nebuti
      //Vykdome veiksmus, ivykus klaidai
      // console.log("Įvyko klaida", error);

      //Direktorijos sukurimas, jeigu ji neegzistuoja
      await mkdir(fileDir);
    }
    // Nurodomas direktorijos pavadinimas kur bus saugomi failai
    next(null, fileDir);
  },
  filename: (req, file, next) => {
    // console.log(file.originalname);
    // console.log(file.originalname.split("."));
    // console.log(fileSplit[fileSplit.length - 1)

    //Isskaidom originalaus failo pavadinima i masyva pagal tasko simboli
    const fileSplit = file.originalname.split(".");
    //Pasiimame paskutini elementa is masyvo
    const format = fileSplit[fileSplit.length - 1];
    // Generuojamas unikalus failo pavadinimas siekiant isvengti failu perrasymo
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    //Failo pavadinimo perdavimas
    next(null, uniqueSuffix + "." + format);
  },
});

//Multer modulio inicijavimas
const upload = multer({
  // Direktorijos nustatymas, kur bus talpinami failai
  storage: storage,
  fileFilter: (req, file, next) => {
    const formats = ["image/jpeg", "image/png", "image/svg+xml"];

    if (formats.includes(file.mimetype)) {
      next(null, true);
    } else {
      next(null, false); // "Netinkamas failo formatas"
    }
  },
});

export default upload;
