const { SearchService } = require("../services/SearchService");

class SearchController {
    async handle(req, res) {
        const { q } = req.query;

        const searchService = new SearchService();

        const results = await searchService.execute(q);

        return res.json(results);
    }
}

module.exports = { SearchController };