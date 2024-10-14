import { Rueda } from "./Rueda";
import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
    private capacidadCarga: number;

    constructor(marca: string, modelo: string, capacidadCarga: number, ruedas: Rueda[], patente: string) {
        super(marca, modelo, ruedas, patente);
        this.capacidadCarga = capacidadCarga;
    }

    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    public setCapacidadCarga(capacidadCarga : number): void{
        if(capacidadCarga != undefined && capacidadCarga > 0){
            this.capacidadCarga = capacidadCarga;
        }
    }
}