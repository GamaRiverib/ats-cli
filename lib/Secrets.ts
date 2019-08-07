const crypto = require('crypto');
import { Conversions } from './Convertions';

const len = 16;
const generateSecret = (l?: number): { secret: string, hex: string } => {
    const secret: string = crypto.randomBytes(l || len)
            .map((val: number) => Conversions.BASE_32_CHARS.charCodeAt(Math.floor(val * Conversions.BASE_32_CHARS.length / 256)))
            .toString();

    const h: string = Conversions.base32ToHexadecimal(secret);
    let hex: string = '';
    for(let i = 0; i < h.length; i++) {
        hex += `0x${h.charAt(i++).toUpperCase()}${h.charAt(i).toUpperCase()} `;
    }
    hex = hex.trim();
    return { secret, hex };
};

export  { generateSecret };