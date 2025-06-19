const shortid = require("shortid");
const URL = require("../models/url.js")

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({ error: "URL is required" });
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({ shortId });
    return res.json({ totalClicks: entry.visitHistory.length, analytics: entry.visitHistory });  
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics

}