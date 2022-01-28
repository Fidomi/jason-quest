"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addNewApplicantRoute = exports.getApplicantByIdRoute = exports.getAllApplicantsRoute = undefined;

var _jasonControllers = require("../controllers/jasonControllers");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getAllApplicantsRoute = exports.getAllApplicantsRoute = {
    path: "/api/applicants",
    method: "get",
    handler: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var applicants;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return (0, _jasonControllers.getAllApplicants)();

                        case 3:
                            applicants = _context.sent;

                            if (applicants) {
                                _context.next = 8;
                                break;
                            }

                            throw new Error("Il n'existe pas de candidats enregistrés.");

                        case 8:
                            res.send(applicants);

                        case 9:
                            _context.next = 14;
                            break;

                        case 11:
                            _context.prev = 11;
                            _context.t0 = _context["catch"](0);

                            res.status(503).send(_context.t0.message);

                        case 14:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 11]]);
        }));

        return function handler(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }()
};

var getApplicantByIdRoute = exports.getApplicantByIdRoute = {
    path: "/api/applicant/:applicantID",
    method: "get",
    handler: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
            var applicant;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;

                            if (!req.params.applicantID) {
                                _context2.next = 12;
                                break;
                            }

                            _context2.next = 4;
                            return (0, _jasonControllers.getApplicantWithID)(req.params.applicantID);

                        case 4:
                            applicant = _context2.sent;

                            if (applicant) {
                                _context2.next = 9;
                                break;
                            }

                            throw new Error("Cet id ne correspond à aucun candidat");

                        case 9:
                            res.send(applicant);

                        case 10:
                            _context2.next = 13;
                            break;

                        case 12:
                            throw new Error("Impossible d'accèder à cette requête : il manque l'id du candidat.");

                        case 13:
                            _context2.next = 18;
                            break;

                        case 15:
                            _context2.prev = 15;
                            _context2.t0 = _context2["catch"](0);

                            res.status(503).send(_context2.t0.message);

                        case 18:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[0, 15]]);
        }));

        return function handler(_x3, _x4) {
            return _ref2.apply(this, arguments);
        };
    }()
};

var addNewApplicantRoute = exports.addNewApplicantRoute = {
    path: "/api/applicant",
    method: "post",
    handler: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
            var _req$body, name, age, height, weight, sport, newApplicant;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _req$body = req.body, name = _req$body.name, age = _req$body.age, height = _req$body.height, weight = _req$body.weight, sport = _req$body.sport;
                            _context3.next = 4;
                            return (0, _jasonControllers.addNewApplicant)(name, age, height, weight, sport);

                        case 4:
                            newApplicant = _context3.sent;

                            if (!newApplicant) {
                                _context3.next = 9;
                                break;
                            }

                            res.send(newApplicant);
                            _context3.next = 10;
                            break;

                        case 9:
                            throw new Error("Impossible d'enregistrer ce nouvel utilisateur.");

                        case 10:
                            _context3.next = 15;
                            break;

                        case 12:
                            _context3.prev = 12;
                            _context3.t0 = _context3["catch"](0);

                            res.status(503).send(_context3.t0.message);

                        case 15:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[0, 12]]);
        }));

        return function handler(_x5, _x6) {
            return _ref3.apply(this, arguments);
        };
    }()
};
//# sourceMappingURL=jasonRoutes.js.map