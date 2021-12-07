const { Router } = require("express");

const { CreatePageController } = require("./controllers/CreatePageController");
const { SearchController } = require("./controllers/SearchController");
const { SuggestController } = require("./controllers/SuggestController");

const routes = Router();

const createPageController = new CreatePageController();
const searchController = new SearchController();
const suggestController = new SuggestController();

routes.post("/pages", createPageController.handle);
routes.get("/search", searchController.handle);
routes.get("/suggest", suggestController.handle);

module.exports = { routes };