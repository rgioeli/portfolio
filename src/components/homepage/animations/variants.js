import { randomNumber } from "../functions/randomNumber";

export const starVariant = (windowWidth) => ({
  initital: {
    opacity: 1,
    x: -windowWidth,
    y: randomNumber(250, -300),
  },
  animate: {
    opacity: 0,
    x: windowWidth,
    y: randomNumber(250, -300),
    transition: { duration: 1.75, delay: randomNumber(0, 1) },
  },
});

export const starVariant2 = (windowWidth) => ({
  initital: {
    opacity: 1,
    x: -windowWidth + 500,
    y: randomNumber(300, -300),
  },
  animate: {
    opacity: 0,
    x: -windowWidth,
    y: randomNumber(250, -300),
    transition: { duration: 1.5, delay: randomNumber(0, 1) },
  },
});

export const parallax = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "backInOut",
    },
  },
};

export const aboutMeVariant = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: "backInOut",
    },
  },
};
