import { Rueda } from "./Rueda";
import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
    constructor(marca: string, modelo: string, ruedas: Rueda[], patente: string) {
        super(marca, modelo, ruedas, patente);
    }
}