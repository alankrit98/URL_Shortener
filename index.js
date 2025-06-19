require('dotenv').config();
const express = require('express');
const {connectDB} = require("./connect")
const urlRoute = require("./routes/url.js");
const URL = require("./models/url.js");

const app = express();
const PORT = 8001;

connectDB(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

app.use(express.json());

app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate({
            shortId
        }, { $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        },
    }
);
res.redirect(entry.redirectURL);
})

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))
