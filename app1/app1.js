const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is APP 1");
});

app.get("/atom", (req, res) => {
  res.send("This is Atom");
});

app.get("/new", (req, res) => {
  res.send("A new route has been added!");
});

app.listen(2222, () => {
  console.log(`App 1 is listening on 2222`);
});
