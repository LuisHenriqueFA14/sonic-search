const Sonic = require("sonic-channel");

const sonicChannelIngest = new Sonic.Ingest({
    host: 'localhost',
    port: 1491,
    auth: "SecretPassword",
});

const sonicChannelSearch = new Sonic.Search({
    host: 'localhost',
    port: 1491,
    auth: "SecretPassword",
});

sonicChannelIngest.connect({
    connected: () => {
        console.log("[SONIC] Ingest connected.");
    }
});

sonicChannelSearch.connect({
    connected: () => {
        console.log("[SONIC] Search connected.");
    }
});

module.exports = { sonicChannelSearch, sonicChannelIngest };