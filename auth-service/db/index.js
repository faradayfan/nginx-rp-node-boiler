const mongoose = require('mongoose');
mongoose.Promise = global.Promise

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose