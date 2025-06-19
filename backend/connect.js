const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
async function connectDB(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectDB,
}