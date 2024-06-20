export function getRandomInteger(min, max) {
    const step = 10;
    const rangeSize = Math.floor((max - min) / step) + 1;
    return min + (Math.floor(Math.random() * rangeSize) * step);
}