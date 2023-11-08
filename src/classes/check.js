export default class Check {
    constructor() {};

    isOutOfBounds(number, minValue, maxValue) {
        if (number < minValue) {
            isTooLowError(minValue);
            return true;
        }
        if (number > maxValue) {
            isTooHighError(maxValue);
            return true;
        }
        return false;
    };
};

function isTooLowError(value) {
    throw new Error('The value you selected is too low. Please select a value above ' + value);
};

function isTooHighError(value) {
    throw new Error('The value you selected is too high. Please select a value below ' + value);
};