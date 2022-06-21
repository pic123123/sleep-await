"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseSleep = void 0;
function promiseSleep(milliSecond) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, milliSecond);
    });
}
exports.promiseSleep = promiseSleep;
