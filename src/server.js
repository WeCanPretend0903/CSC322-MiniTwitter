const http = require("http");

const app = require('express')();
const port = process.env.PORT || 3000;

const UserRouter = require('./api/user');

const bodyParser = require('express').json;
app.user(bodyParser());
app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
})