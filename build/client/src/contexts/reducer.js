"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalActions_1 = require("./global/GlobalActions");
function reducer(state, action) {
    return GlobalActions_1.actions[action.type](state, action);
}
exports.default = reducer;
