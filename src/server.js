const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require("cors");
//docker run -p  27017:27017 -v /home/mongo:/data/ -d mongo
mongoose.connect(
    "mongodb://localhost/dev",
    {
        useNewUrlParser: true
    }
);
var db = mongoose.connection;
db.on('error', console.error.bind(console, "conection error:"));
app.use(express.json);
app.use(cors());
app.use(routes);

app.listen(3333);