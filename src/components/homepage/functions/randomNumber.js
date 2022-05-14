import { Random } from "random-js";

export const randomNumber = (num1 = 1950, num2 = 1950) => {
  const random = new Random(); // uses the nativeMath engine
  const value = random.integer(num1, num2);
  return value;
};
