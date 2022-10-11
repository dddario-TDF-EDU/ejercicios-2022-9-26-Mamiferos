import { Mamifero } from "./Mamifero";

export class Omnivoro extends Mamifero {
    constructor(paramName: string) {
        super(paramName);
    }

    public comer(): void {
        console.log("comiendo Carne y/o Hierbas");
    }
}