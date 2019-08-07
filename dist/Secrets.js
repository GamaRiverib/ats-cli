"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require('crypto');
var Convertions_1 = require("./Convertions");
var len = 16;
var generateSecret = function (l) {
    var secret = crypto.randomBytes(l || len)
        .map(function (val) { return Convertions_1.Conversions.BASE_32_CHARS.charCodeAt(Math.floor(val * Convertions_1.Conversions.BASE_32_CHARS.length / 256)); })
        .toString();
    var h = Convertions_1.Conversions.base32ToHexadecimal(secret);
    var hex = '';
    for (var i = 0; i < h.length; i++) {
        hex += "0x" + h.charAt(i++).toUpperCase() + h.charAt(i).toUpperCase() + " ";
    }
    hex = hex.trim();
    return { secret: secret, hex: hex };
};
exports.generateSecret = generateSecret;
