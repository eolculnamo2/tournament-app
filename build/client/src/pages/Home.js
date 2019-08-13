"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const components_1 = require("../components");
require("../scss/pages/home.scss");
function Home() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.RegistrationForm, null),
        react_1.default.createElement(components_1.LoginForm, null)));
}
exports.default = Home;
