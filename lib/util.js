"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omit = exports.pick = exports.hasKey = void 0;
// Type guard to determine if an object has a given key
// If this feature gets implemented, we can use `in` instead: https://github.com/Microsoft/TypeScript/issues/10485
function hasKey(k, o) {
    return typeof o === 'object' && k in o;
}
exports.hasKey = hasKey;
function pick(obj, keys) {
    var result = {};
    keys.forEach(function (key) {
        result[key] = obj[key];
    });
    return result;
}
exports.pick = pick;
function omit(obj, omitKeys) {
    var result = {};
    var existingKeys = Object.keys(obj);
    existingKeys.forEach(function (key) {
        if (omitKeys.indexOf(key) === -1)
            result[key] = obj[key];
    });
    return result;
}
exports.omit = omit;
