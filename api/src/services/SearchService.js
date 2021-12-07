const { sonicChannelSearch } = require("../sonic")

class SearchService {
    async execute(q) {
        const results = await sonicChannelSearch.query('pages', 'default', q, { lang: 'eng' });

        return results;
    }
}

module.exports = { SearchService };