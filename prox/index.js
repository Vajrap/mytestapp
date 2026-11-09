const express = require("express");

const app = express();

const portMap = {
  ["app1"]: 2222,
  ["app2"]: 4444,
  ["app3"]: 3333,
};

app.get("/:appName", async (req, res) => {
  const targetPort = portMap[req.params.appName];
  if (!targetPort) return res.status(404).send("Can't find");

  const actualTarget = `http://127.0.0.1:${targetPort}${req.originalUrl}`;
  console.log(`Target: ${actualTarget}`);

  try {
    const response = await fetch(`http://127.0.0.1:${targetPort}`);
    const body = await response.text();
    console.log(body);

    res
      .status(response.status)
      .set("Content-Type", response.headers.get("content-type") || "text/plain")
      .send(body);
  } catch (error) {
    console.log(error);
    res.status(502).send("Some problem");
  }
});

app.listen(80, () => {
  console.log("Proxy is listening to port 80");
});
