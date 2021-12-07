const { sonicChannelIngest } = require("../sonic")
const { v4: uuid } = require("uuid");

class CreatePageService {
    async execute(title, content) {
        const id = uuid();

        try {
            await sonicChannelIngest.push('pages', 'default', `page:${id}`, `${title} ${content}`, {
                lang: 'por',
            });

            return true;
        } catch(err) {
            throw new Error(err.message);
        }
    }
}

module.exports = { CreatePageService };