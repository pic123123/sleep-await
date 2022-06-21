export function sleepAwait(milliSecond: number): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, milliSecond);
  });
}
