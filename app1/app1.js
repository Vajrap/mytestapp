const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is APP 1");
});

app.get("/atom", (req, res) => {
  res.semd("This is Atom");
});

app.listen(2222, () => {
  console.log(`App 1 is listening on 2222`);
});
