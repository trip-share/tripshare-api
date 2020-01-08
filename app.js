const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Tripshare api is running!!!"));

app.listen(port, () => console.log(`Tripshare api listening on port ${port}!`));
