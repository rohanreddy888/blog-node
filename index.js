const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routes/user");
const app = express();
const PORT = 8001;

mongoose
  .connect("mongodb://127.0.0.1:27017/blogger")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.render("home");
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server Started on PORT:${PORT}`);
});
