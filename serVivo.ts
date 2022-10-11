export interface SerVivo {
    dormir(): void;
    comer(): void;
    setName(paramName: string): void;
    getName(): string;
    moverse(paramPasos: number): void;
}