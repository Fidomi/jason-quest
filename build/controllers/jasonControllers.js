"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addNewApplicant = exports.findApplicantByName = exports.getApplicantWithID = exports.getAllApplicants = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _jasonModel = require("../models/jasonModel");

require("babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Applicant = _mongoose2.default.model("Applicant", _jasonModel.ApplicantSchema);

var getAllApplicants = exports.getAllApplicants = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var allApplicants;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return Applicant.find({});

                    case 3:
                        allApplicants = _context.sent;

                        if (allApplicants) {
                            _context.next = 8;
                            break;
                        }

                        throw new Error("Impossible");

                    case 8:
                        return _context.abrupt("return", allApplicants);

                    case 9:
                        _context.next = 14;
                        break;

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context["catch"](0);
                        return _context.abrupt("return", _context.t0);

                    case 14:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 11]]);
    }));

    return function getAllApplicants() {
        return _ref.apply(this, arguments);
    };
}();

var getApplicantWithID = exports.getApplicantWithID = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var applicant;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return Applicant.findById(id).exec();

                    case 3:
                        applicant = _context2.sent;

                        if (applicant) {
                            _context2.next = 8;
                            break;
                        }

                        throw new Error("Cet id ne correspond à aucun candidat");

                    case 8:
                        return _context2.abrupt("return", applicant);

                    case 9:
                        _context2.next = 15;
                        break;

                    case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2["catch"](0);

                        console.error(_context2.t0);
                        return _context2.abrupt("return", _context2.t0);

                    case 15:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 11]]);
    }));

    return function getApplicantWithID(_x) {
        return _ref2.apply(this, arguments);
    };
}();

var findApplicantByName = exports.findApplicantByName = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(name) {
        var applicant;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;

                        if (!name) {
                            _context3.next = 12;
                            break;
                        }

                        _context3.next = 4;
                        return Applicant.findOne({
                            name: name
                        }).exec();

                    case 4:
                        applicant = _context3.sent;

                        if (applicant) {
                            _context3.next = 9;
                            break;
                        }

                        return _context3.abrupt("return", false);

                    case 9:
                        return _context3.abrupt("return", applicant);

                    case 10:
                        _context3.next = 13;
                        break;

                    case 12:
                        throw new Error("Il manque le nom du candidat.");

                    case 13:
                        _context3.next = 19;
                        break;

                    case 15:
                        _context3.prev = 15;
                        _context3.t0 = _context3["catch"](0);

                        console.error(_context3.t0.message);
                        return _context3.abrupt("return", _context3.t0.message);

                    case 19:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 15]]);
    }));

    return function findApplicantByName(_x2) {
        return _ref3.apply(this, arguments);
    };
}();

var addNewApplicant = exports.addNewApplicant = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(name, age, height, weight, sport) {
        var alreadyExists, newApplicant, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return findApplicantByName(name);

                    case 3:
                        alreadyExists = _context4.sent;

                        if (alreadyExists) {
                            _context4.next = 16;
                            break;
                        }

                        newApplicant = new Applicant({
                            name: name,
                            age: age,
                            height: height,
                            weight: weight,
                            sport: sport
                        });
                        _context4.next = 8;
                        return newApplicant.save();

                    case 8:
                        result = _context4.sent;

                        if (result) {
                            _context4.next = 13;
                            break;
                        }

                        throw new Error("Impossible d'enregistrer ce nouvel utilisateur.");

                    case 13:
                        return _context4.abrupt("return", result);

                    case 14:
                        _context4.next = 17;
                        break;

                    case 16:
                        throw new Error("Cet utilisateur existe déjà.");

                    case 17:
                        _context4.next = 23;
                        break;

                    case 19:
                        _context4.prev = 19;
                        _context4.t0 = _context4["catch"](0);

                        console.error(_context4.t0.message);
                        return _context4.abrupt("return", _context4.t0.message);

                    case 23:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[0, 19]]);
    }));

    return function addNewApplicant(_x3, _x4, _x5, _x6, _x7) {
        return _ref4.apply(this, arguments);
    };
}();
//# sourceMappingURL=jasonControllers.js.map