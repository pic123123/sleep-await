declare class PromiseSleep implements IPromiseSleep {
    promiseSleep(milliSecond: number): Promise<unknown>;
}
interface IPromiseSleep {
    promiseSleep(milliSecond?: number): unknown;
}
declare const _default: {
    promiseSleep: () => PromiseSleep;
};
export default _default;
