#!/usr/bin/env node

import { createHash } from 'crypto';
import { generateSecret } from './Secrets';

const program = require('commander');

const gsCommand = (size?: string) => {
    const l: number | undefined = size ? parseInt(size) : undefined;
    const r: { secret: string, hex: string } = generateSecret(l);
    console.log(r);
};

const validateCodeFormat = (code: string): boolean => {
    const regexp = new RegExp('^[1-9][0-9]{3}$');
    return regexp.test(code);
};

const hcCommand = (code: string) => {
    if(!validateCodeFormat(code)) {
        console.error('Bad code format');
        return;
    }
    const hash: string = createHash('md5').update(code, "utf8").digest('hex').toUpperCase();
    console.log({hash});
};

program
    .version('1.0.0', '-v, --version')
    .command('gs [size]')
    .description('Generate secret')
    .action(gsCommand);

program
    .version('1.0.0', '-v, --version' )
    .command('hc <code>')
    .description('Generate hash code')
    .action(hcCommand);

program.parse(process.argv);