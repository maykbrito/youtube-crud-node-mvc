const express = require("express");
const routes = express.Router();
const ContactController = require("./controllers/ContactController");

routes.get("/contacts", ContactController.index);
routes.get("/contacts/create", ContactController.create);
routes.post("/contacts", ContactController.store);
routes.get("/contacts/:id", ContactController.edit);
routes.put("/contacts", ContactController.update);
routes.delete("/contacts", ContactController.destroy);

module.exports = routes;
