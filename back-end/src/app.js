const express = require('express')
const app = express()

const userRoute = require('./routes/user');
const questionRoute = require('./routes/question');
const postRoute = require('./routes/post');
const resultRoute = require('./routes/result');
const badgeRoute = require('./routes/badge');
const conquestRoute = require('./routes/conquests');
const loginRoute = require('./routes/login');

app.use('/user', userRoute)
app.use('/chapter/quests', questionRoute);
app.use('/post', postRoute);
app.use('/chapter/result', resultRoute);
app.use('/badge', badgeRoute)
app.use('/user/conquests', conquestRoute)
app.use('/login', loginRoute)

module.exports = app;
app.listen(8000)