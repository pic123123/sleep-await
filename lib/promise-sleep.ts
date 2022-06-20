class PromiseSleep implements IPromiseSleep {
  promiseSleep(milliSecond: number): Promise<unknown> {
    const PromiseSleep = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, milliSecond);
    });
    return PromiseSleep;
  }
}

interface IPromiseSleep {
  promiseSleep(milliSecond?: number): unknown;
}

export default {
  promiseSleep: () => new PromiseSleep(),
};
