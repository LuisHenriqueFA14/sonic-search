const { SuggestService } = require("../services/SuggestService");

class SuggestController {
    async handle(req, res) {
        const { q } = req.query;

        const suggestService = new SuggestService();

        const results = await suggestService.execute(q);

        return res.json(results);
    }
}

module.exports = { SuggestController };