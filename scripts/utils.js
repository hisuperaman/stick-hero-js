export function getRandomInteger(min, max) {
    const rangeSize = Math.floor((max - min) / 10) + 1;
    return min + (Math.floor(Math.random() * rangeSize) * 10);
}