import { Rueda } from "./Rueda";

export class Vehiculo {
    private marca: string;
    private modelo: string;
    private ruedas: Rueda[];
    private patente: string;

    constructor(marca: string, modelo: string, ruedas: Rueda[], patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.ruedas = ruedas;
        this.patente = patente;
    }

    //getters
    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): string {
        return this.modelo;
    }
    public getRuedas(): number[] {
        return this.ruedas.map(rueda => rueda.getTamañoRueda());
    }
    public getPatente(): string {
        return this.patente;
    }

    //setters
    public setMarca(marca: string): void {
        if(marca != undefined && marca != ""){
            this.marca = marca;
        }
    }
    public setModelo(modelo: string): void {
        if(modelo != undefined && modelo != ""){
            this.modelo = modelo;
        }
    }
    public setRuedas(ruedas: Rueda[]): void {
        if(ruedas != undefined && ruedas.length >= 2){
            this.ruedas = ruedas;
        }
    }
    public setPatente(patente: string): void {
        if(patente != undefined && patente.length >= 6){
            this.patente = patente;
        }
    }
}