const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is APP 3");
});

app.get("/atom", (req, res) => {
  res.semd("This is Atom too but 2");
});

app.listen(3333, () => {
  console.log(`App 3 is listening on 3333`);
});
