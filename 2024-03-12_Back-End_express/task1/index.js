import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/login", (req, res) => {
  console.log(req.body);
});

app.listen(3002);
