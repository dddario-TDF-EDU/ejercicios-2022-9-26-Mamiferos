import { Mamifero } from "./Mamifero";

export class Carnivoro extends Mamifero {
    constructor(paramName: string) {
        super(paramName);
    }

    public comer(): void {
        console.log("comiendo Carne");
    }
}