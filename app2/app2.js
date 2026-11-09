const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is APP 2");
});

app.get("/atom", (req, res) => {
  res.semd("This is Atom, but app2 ja, no load balance ja");
});

app.listen(4444, () => {
  console.log("App 2 is listening to prot 4444");
});
