"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const GlobalState_1 = __importDefault(require("./GlobalState"));
const GlobalContext = react_1.createContext(GlobalState_1.default);
exports.default = GlobalContext;
