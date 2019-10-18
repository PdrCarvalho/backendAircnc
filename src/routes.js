const express = require('express')
const routes = express.Router()


routes.get('/',(req,res)=>{res.json({mensagem:"to com sono"})})

module.exports =routes;