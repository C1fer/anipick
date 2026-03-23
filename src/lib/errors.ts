export class PagesExhaustedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PagesExhaustedError";
    }
}