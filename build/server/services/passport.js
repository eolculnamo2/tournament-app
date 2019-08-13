"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passportLocal = __importStar(require("passport-local"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const LocalStrategy = passportLocal.Strategy;
const router = express_1.Router();
router.use(body_parser_1.default.json());
router.use(body_parser_1.default.urlencoded({ extended: true }));
passport_1.default.use(new LocalStrategy(User_1.default.authenticate()));
passport_1.default.serializeUser(User_1.default.serializeUser());
passport_1.default.deserializeUser(User_1.default.deserializeUser());
// Register New User
router.post('/register', (req, res) => {
    if (req.body.password === req.body.confirmPassword) {
        User_1.default.register(new User_1.default({
            username: req.body.username.trim().toLowerCase(),
            email: req.body.email.trim(),
        }), req.body.password.trim(), err => {
            if (err) {
                console.log(err.message);
                res.send({ data: err.message });
            }
            else {
                passport_1.default.authenticate('local')(req, res, () => {
                    res.send({
                        name: 'authenticated',
                        user: req.user.username.trim(),
                        data: 'Registration Successful!',
                    });
                });
            }
        });
    }
    else {
        res.send({ data: 'Passwords Do Not Match' });
    }
});
// Login
router.post('/login', passport_1.default.authenticate('local'), (req, res) => {
    if (!req.user) {
        res.send({
            name: 'invalid-credentials',
            data: 'Login Failed. Please try Again.',
        });
    }
    else if (req.user) {
        res.send({
            name: 'authenticated',
            user: req.user.username.trim(),
            data: 'Login Successful!',
        });
    }
});
// Logout
router.post('/logout', (req, res) => {
    req.logout();
    return res.send({ data: 'You are logged out.' });
});
router.post('/getUserProfile', (req, res) => {
    if (req.user) {
        res.json({ data: req.user });
    }
    else if (!req.user) {
        res.json({ data: false });
    }
});
router.post('/getProfile', (req, res) => {
    User_1.default.findOne({ username: req.body.profile }, (err, response) => {
        let isContact = false;
        if (req.user) {
            for (let i = 0; i < req.user.contacts.length; i += 1) {
                if (response && response.username === req.user.contacts[i].username) {
                    isContact = true;
                    break;
                }
            }
            if (response && req.user.username === response.username) {
                isContact = true;
            }
        }
        if (response === null) {
            res.json({ data: false });
        }
        else {
            res.json({ data: response, isContact });
        }
    });
});
exports.default = router;
