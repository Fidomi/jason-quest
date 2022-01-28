"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicantSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicantSchema = exports.ApplicantSchema = new _mongoose2.default.Schema({
    name: {
        type: String,
        required: "Entrez votre nom",
        index: { unique: Boolean }
    },
    age: {
        type: Number,
        required: "Entrez votre age"
    },
    height: {
        type: Number,
        required: "Entrez votre taille en cm"
    },
    weight: {
        type: Number,
        required: "Entrez votre poids en kg"
    },
    sport: {
        type: Boolean,
        required: "Faites-vous du sport plus de deux fois par semaine?"
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});
//# sourceMappingURL=jasonModel.js.map