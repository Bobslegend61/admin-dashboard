const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require("./routes/routes");

// Define App
const app = express();

// Define port
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use("/api", router);

// listen
app.listen(PORT, () => console.log(`App running on port: ${ PORT }`));