const express = require('express')
const routes = express.Router()
const Session = require("./controllers/SessionController")

routes.get('/',Session.store);

module.exports =routes;