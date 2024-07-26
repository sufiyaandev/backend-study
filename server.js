require("dotenv").config();

const express = require("express");
const router = require("./Routes/router");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/router", router);

app.listen(process.env.PORT, () => {
  console.log("listening on", process.env.PORT);
});
