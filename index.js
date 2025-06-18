const express = require('express');
const {connectDB} = require("./connect")
const urlRoute = require("./routes/url.js");

const app = express();
const PORT = 8001;

connectDB("mongodb+srv://alankritagarwal8:Bz6XkRd15apSHdmr@cluster0.hutb52l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))
