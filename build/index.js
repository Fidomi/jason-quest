"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _routes = require("./routes");

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 8000;

//mongoose connection
_mongoose2.default.Promise = global.Promise;
process.env.NODE_ENV === "production" ? _mongoose2.default.connect(_config2.default.connectionString).catch(function (error) {
    return console.error(error);
}) : _mongoose2.default.connect("mongodb://127.0.0.1:27017/jasondb").catch(function (error) {
    return console.error(error);
});

app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.json());
console.log("process.env.NODE_ENV", process.env.NODE_ENV);

process.env.NODE_ENV === "production" ? app.use(_express2.default.static(_path2.default.join(__dirname, "../frontend/build"))) : app.use(_express2.default.static(_path2.default.join(__dirname, "../frontend/")));

_routes.routes.forEach(function (route) {
    app[route.method](route.path, route.handler);
});

app.get("*", function (req, res) {
    res.sendFile(_path2.default.join(__dirname + "/frontend/build/index.html"));
});

app.listen(PORT, function () {
    return console.log("Your server is running on port " + PORT);
});
//# sourceMappingURL=index.js.map