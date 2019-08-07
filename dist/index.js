#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var Secrets_1 = require("./Secrets");
var program = require('commander');
var gsCommand = function (size) {
    var l = size ? parseInt(size) : undefined;
    var r = Secrets_1.generateSecret(l);
    console.log(r);
};
var validateCodeFormat = function (code) {
    var regexp = new RegExp('^[1-9][0-9]{3}$');
    return regexp.test(code);
};
var hcCommand = function (code) {
    if (!validateCodeFormat(code)) {
        console.error('Bad code format');
        return;
    }
    var hash = crypto_1.createHash('md5').update(code, "utf8").digest('hex').toUpperCase();
    console.log({ hash: hash });
};
program
    .version('1.0.0', '-v, --version')
    .command('gs [size]')
    .description('Generate secret')
    .action(gsCommand);
program
    .version('1.0.0', '-v, --version')
    .command('hc <code>')
    .description('Generate hash code')
    .action(hcCommand);
program.parse(process.argv);
