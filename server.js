const express = require("express");
const app = express();
const port = process.env.PORT || 3000; //Line 3

var path = require("path");
// This displays message that the server running and listening to specified port
let root = require("path").join(__dirname, "build");
app.use(express.static(root));

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.use("/app/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
