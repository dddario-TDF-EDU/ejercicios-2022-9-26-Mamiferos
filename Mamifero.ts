import { SerVivo } from "./serVivo";

export class Mamifero implements SerVivo {
    private name: string;

    constructor(paramName: string) {
        this.name = paramName;
    }

    public dormir(): void {
        console.log("esta durmiendo");
    }

    public comer(): void {
        console.log("esta comiendo");
    }

    public setName(paramName: string): void {
        this.name = paramName;
    }

    public getName(): string {
        return this.name;
    }

    public moverse(paramPasos: number): void {
        console.log("se desplaza " + paramPasos + " pasos");
    }
}