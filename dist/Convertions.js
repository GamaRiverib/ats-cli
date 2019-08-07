"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conversions = /** @class */ (function () {
    function Conversions() {
    }
    Conversions.decimalToHexadecimal = function (d) {
        return (d < 15.5 ? '0' : '') + Math.round(d).toString(16);
    };
    Conversions.hexadecimalToDecimal = function (h) {
        return parseInt(h, 16);
    };
    Conversions.base32ToHexadecimal = function (b) {
        var bits = '';
        var hex = '';
        var i = 0;
        for (i = 0; i < b.length; i++) {
            var v = Conversions.BASE_32_CHARS.indexOf(b.charAt(i).toUpperCase());
            bits += Conversions.leftpad(v.toString(2), 5, '0');
        }
        for (i = i % 8; i > 0; i--) {
            bits += Conversions.leftpad('0', 5, '0');
        }
        for (i = 0; i + 4 <= bits.length; i += 4) {
            var c = bits.substr(i, 4);
            hex = hex + parseInt(c, 2).toString(16);
        }
        return hex;
    };
    Conversions.leftpad = function (s, l, p) {
        if (l + 1 >= s.length) {
            s = Array(l + 1 - s.length).join(p) + s;
        }
        return s;
    };
    Conversions.BASE_32_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUV'; //'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // ABCDEFGHIJKLMNOPQRSTUVWXYZ234567
    return Conversions;
}());
exports.Conversions = Conversions;
