const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render(`home.ejs`);
  app.set("views", path.join(__dirname, "/views"));
});

app.get("/AsslamoAlaikum", (req, res) => {
  res.send("Asslam o Alaikum");
});
app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceValue: diceValue });
});
app.get("/insta/:username", (req, res) => {
  let { username } = req.params;
  let instaData = require("./data.json");
  let data = instaData[username];
  // console.log(data);
  if (data) {
    res.render("instagaram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
