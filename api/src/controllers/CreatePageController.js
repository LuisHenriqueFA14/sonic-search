const { CreatePageService } = require("../services/CreatePageService");

class CreatePageController {
    async handle(req, res) {
        const { title, content } = req.body;

        const createPageService = new CreatePageService();

        const result = await createPageService.execute(title, content);

        if(result) {
            return res.status(201).send();
        }
    }
}

module.exports = { CreatePageController };