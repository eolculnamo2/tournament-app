"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION_TYPES = {
    SET_USERNAME: 'SET_USERNAME',
};
exports.actions = {
    [exports.ACTION_TYPES.SET_USERNAME]: (state, action) => ({
        ...state,
        username: action.payload,
    }),
};
