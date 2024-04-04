const mongoose = require('mongoose');

const userSchema = new mongoose.Scheema({
    email: String,
    name: String,
    password: String,
    points: int
});

const User = mongoose.model('User', userSchema);

module.exports = User;