"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = exports.RuntypeName = void 0;
var runtype_1 = require("../runtype");
exports.RuntypeName = Symbol('RuntypeName');
function Brand(brand, entity) {
    return runtype_1.create(function (value) {
        var validated = entity.validate(value);
        return validated.success
            ? { success: true, value: validated.value }
            : validated;
    }, {
        tag: 'brand',
        brand: brand,
        entity: entity,
    });
}
exports.Brand = Brand;
