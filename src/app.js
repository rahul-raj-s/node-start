const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

const public_dir = path.join(__dirname, "../public");
app.use(express.static(public_dir));
app.set("view engine", "hbs");

// app.get("/help", (req, res) => {
//   res.send("Helping");
// });
// app.get("/about", (req, res) => {res.send("")});
app.get("", (req, res) => {
  res.render("index", { name: "Rahul" });
});
app.get("/userlist", (req, res) => {
  res.send([{ name: "Rahul" }, { name: "Dhan" }]);
});

app.listen(port, () => {
  console.log("Listening at port", port);
});
