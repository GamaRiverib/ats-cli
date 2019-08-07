export declare class Conversions {
    static readonly BASE_32_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUV";
    static decimalToHexadecimal(d: number): string;
    static hexadecimalToDecimal(h: string): number;
    static base32ToHexadecimal(b: string): string;
    static leftpad(s: string, l: number, p: string): string;
}
