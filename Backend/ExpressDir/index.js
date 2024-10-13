const express = require("express");
const app = express();
// console.log(app);
const port = 8080; //3000;//
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
// app.use((req, res) => {
//   console.log(`request recieved`);
//   res.send(
//     "<h1>List of Fruit</h1> <ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>"
//   );
// });
app.get("/", (req, res) => {
  res.send("Asslam o Alaikum ");
});
app.get("/help", (req, res) => {
  res.send("you contacted to help path");
});
// app.get("/search", (req, res) => {
//   res.send("you contacted to search path");
// });
// app.get("*", (req, res) => {
//   res.send("This page is not found");
// });
// app.post("/", (req, res) => {
//   res.send("you contacted to post path");
// });
app.get("/:username/:Id", (req, res) => {
  let { username, Id } = req.params;
  let htmlStr = `<h1>Welcome to the page of @ ${username}</h1>`;
  res.send(htmlStr);
});
app.get("/search", (req, res) => {
  let { q } = req.query;
  let html = `<h1>search result for the query ${q}</h1>`;
  res.send(html);
});
