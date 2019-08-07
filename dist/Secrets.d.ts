declare const generateSecret: (l?: number | undefined) => {
    secret: string;
    hex: string;
};
export { generateSecret };
