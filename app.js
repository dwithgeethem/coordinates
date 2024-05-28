const express = require("express");
const serveStatic = require("serve-static");

const app = express();
const port = 3005;

// Serve static files from the current directory
app.use("/", serveStatic("."));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
