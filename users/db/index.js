const mongoose = require('mongoose');
mongoose.Promise = global.Promise

mongoose.connect(`mongodb://${process.env.DATABASE_HOST}/users`);
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose