"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PromiseSleep {
    promiseSleep(milliSecond) {
        const PromiseSleep = new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, milliSecond);
        });
        return PromiseSleep;
    }
}
exports.default = {
    promiseSleep: () => new PromiseSleep(),
};
