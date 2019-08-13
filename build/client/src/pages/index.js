"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Home_1 = __importDefault(require("./Home"));
// Used by both server's PageController and react router to sync page
// calls for requests made by server routing and front end routing.
const routes = [{ path: '/', component: Home_1.default }];
exports.default = routes;
