const express = require("express");
const server = express();
const nunjucks = require("nunjucks");
const routes = require("./src/routes");

const methodOverride = require("./src/config/methodOverride");

server.set("view engine", "njk");
nunjucks.configure("src/views", {
  noCache: true,
  autoescape: true,
  express: server
});

server.use(express.urlencoded({ extended: true }));
server.use(methodOverride);

server.use(routes);

server.listen(3000, () => console.log("server is running"));
