import { Mamifero } from "./Mamifero";

export class Hervivoro extends Mamifero {
    constructor(paramName: string) {
        super(paramName);
    }

    public comer(): void {
        console.log("comiendo Hierbas");
    }
}