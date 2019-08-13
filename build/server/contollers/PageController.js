"use strict";
// page level server side get routes
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// External Dependencies
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const router = express_1.Router();
// const routes: Array<string> = pages.map((route: IPathComponent) => route.path);
// router.get(routes, (req, res) =>
//   res.sendFile(path.join(__dirname, '../..', '/client/index.html'))
// );
router.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../..', '/client/index.html'));
});
exports.default = router;
