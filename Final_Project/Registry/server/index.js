import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import cors from "cors";
import users from "./controller/user.js";
import projects from "./controller/project.js";
import status from "./controller/status.js";

// Prisijungimas prie mongodb duomenų bazės:
await mongoose.connect("mongodb://localhost:27017/registry");

const app = express();

app.set("trust proxy", true);

// CORS apsaugos nuėmimas
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Sesijos sukūrimas
app.use(
  session({
    // Slaptos frazės nustatymas
    secret: "labai slapta fraze",
    resave: false,
    saveUninitialized: false,
  })
);

// Nustatymas gauti duomenis x-www-form-urlenced formatu
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Nustatymas gauti duomenis JSON formatu
app.use(express.json());

// Kontrolerių registracija
app.use("/users", users);
app.use("/projects", projects);
app.use("/status", status);

// Failų atvaizdavimui kreipiantis į route'ą uploads
app.use("/uploads", express.static("./uploads"));

app.listen(3000);
