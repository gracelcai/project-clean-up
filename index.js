const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://gracecai7:Hopper737@users.baiusgz.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected');
});

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);
