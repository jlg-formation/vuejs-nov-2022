export const sleep = (delay: number): Promise<void> =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("wake up");
      resolve();
    }, delay)
  );

export const temporize = async <T>(
  delay: number,
  promise: Promise<T>
): Promise<T> => {
  const result = await Promise.all([sleep(delay), promise]);
  return result[1];
};
