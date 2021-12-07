const { sonicChannelSearch } = require("../sonic")

class SuggestService {
    async execute(q) {
        const results = await sonicChannelSearch.suggest('pages', 'default', q, { limit: 5 });

        return results;
    }
}

module.exports = { SuggestService };