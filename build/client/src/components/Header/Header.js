"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Header() {
    return (react_1.default.createElement("div", { className: "Header" },
        react_1.default.createElement("h3", null, "LOGO HERE"),
        react_1.default.createElement("div", null, "links")));
}
exports.default = Header;
