"use strict";
exports.__esModule = true;
var controller_1 = require("./ads/controller");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 4000;
app
    .use(bodyParser.json())
    .use(controller_1["default"])
    .listen(port, function () { return console.log("Listening on port " + port); });
