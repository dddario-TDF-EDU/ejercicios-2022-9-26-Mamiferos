import { Carnivoro } from "./Carnivoro";
import { Hervivoro } from "./Vegetariano";
import { Omnivoro } from "./Omnivoro";
import { Mamifero } from "./Mamifero"

let cerdo: Omnivoro = new Omnivoro("Feif");
let tigre: Carnivoro = new Carnivoro("Felix");
let conejo: Hervivoro = new Hervivoro("Finn");

let grupoZoo: Mamifero[] = [cerdo, tigre, conejo];
todosComen(grupoZoo);
todosCaminan(grupoZoo);


function todosComen(paramArray): void {
    for (let i = 0; i < paramArray.length; i++) {
        console.log(paramArray[i].getName());
        paramArray[i].comer();
    }
}

function todosCaminan(paramArray): void {
    for (let i = 0; i < paramArray.length; i++) {
        console.log(paramArray[i].getName());
        paramArray[i].moverse(i);
    }
}
