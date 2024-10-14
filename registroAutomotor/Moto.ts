import { Rueda } from "./Rueda";
import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    private color: string;

    constructor(marca: string, modelo: string, color: string, ruedas: Rueda[], patente: string) {
        super(marca, modelo, ruedas, patente);
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color : string): void{
        if(color != undefined && color != ""){
            this.color = color;
        }
    }
}