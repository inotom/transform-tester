/** @prettier */

export const isMobile = (width = 640) => {
  return window.matchMedia(`(max-width: ${width}px)`).matches;
};

export const isTouchable = () => {
  return window.ontouchstart === null;
};
