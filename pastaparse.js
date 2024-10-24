let pastaparse = {
    /** 
     * Clamps number within the inclusive lower and upper bounds.
     * @param {number} number The number to clamp.
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} The clamped number.
     */
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    /**
     * Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end, the params are swapped to support negative ranges.
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} True if number is in range, else false.
     */
    inRange(number, start = 0, end) {
        if (typeof end === 'undefined') {
            end = start;
            start = 0;
        }
        if (start > end) {
            let endValue = end;
            end = start;
            start = endValue;
        }
        const isInRange = start <= number && number < end;
        return isInRange;
    },

    /**
     * Splits string into an array of its words.
     * @param {string} [string=''] The string to inspect.
     * @returns {Array} The words of string.
     */
    words(string = '') {
        const words = string.split(' ');
        return words;
    },

    /**
     * Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @returns {string} The padded string.
     */
    pad(string = '', length = 0) {
        if (length <= string.length) {
            return string;
        }
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },

    /**
     * Checks if key is a direct property of object.
     * @param {object} object The object to query.
     * @param {string} key The object property to check.
     * @returns {boolean} True if path exists, else false.
     */
    has(object, key) {
        const hasValue = object[key] !== undefined;
        return hasValue;
    },

    /**
     * Creates an object composed of the inverted keys and values provided by object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
     * @param {object} object The object to invert.
     * @returns {object} The new inverted object.
     */
    invert(object) {
        const invertedObject = {};
        for (let key in object) {
            let originalValue = object[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },

    /**
     * Finds the key of the first element matching the predicate instead of the element itself.
     * @param {object} object The object to inspect.
     * @param {function} predicate The function invoked per iteration.
     * @return {*} The key of the matched element, else undefined.
     */
    findKey(object, predicate) {
        let firstKey = undefined;
        for (let key in object) {
            let keyValue = object[key];
            if (predicate(keyValue)) {
                firstKey = key;
                break;
            }
        }
        return firstKey;
    },

    /**
     * Creates a slice of array with n elements dropped from the beginning.
     * @param {Array} array The array to process.
     * @param {number} n The number of elements to drop.
     * @returns {Array} The slice of array.
     */
    drop(array, n) {
        if (n === undefined) {
            n = 1;
        }
        const droppedArray = array.slice(n);
        return droppedArray;
    },

    /**
     * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
     * @param {Array} array The array to process.
     * @param {function} predicate The function invoked per iteration.
     * @returns {Array} The slice of array.
     */
    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
        const droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    /**
     * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk.
     * @returns The new array of chunks.
     */
    chunk(array, size=1) {
        if (size === undefined) {
            size = 1;
        }
        const arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
};

// Do not write or modify code below this line.
module.exports = pastaparse;