const { routes } = require("./routes");
const { sonicChannelIngest, sonicChannelSearch } = require("./sonic");
const express = require("express");
const app = express();

app.use(express.json());


app.use(routes);

app.listen(3333, () => console.log("[SERVER] Server is running!"));