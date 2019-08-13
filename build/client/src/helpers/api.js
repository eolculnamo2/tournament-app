"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function postData(route, payload) {
    const response = await fetch(route, {
        method: 'POST',
        body: payload,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
    });
    return await response.json();
}
exports.postData = postData;
