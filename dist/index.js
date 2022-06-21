"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleepAwait = void 0;
function sleepAwait(milliSecond) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, milliSecond);
    });
}
exports.sleepAwait = sleepAwait;
