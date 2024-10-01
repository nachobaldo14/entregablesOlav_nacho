import { RegistroAutomotor} from "./RegistroAutomotor";

export class Autos {
    private marcaAuto: string;
    private modeloAuto: number;
    private patenteAuto: number;

    public constructor(marca: string, modelo: number, patente:number) {
        this.marcaAuto = marca;
        this.modeloAuto = modelo;
        this.patenteAuto = patente;
    }
    
//get
public getmarcaAuto():string {
    return this.marcaAuto;
}

public getmodeloAuto():number {
    return this.modeloAuto;
}

public getpatenteAuto():number {
    return this.patenteAuto;
}

//set

public setmarcaAuto():string {
    return this.marcaAuto;
}

public setmodeloAuto():number {
    return this.modeloAuto;
}

public setpatenteAuto():number {
        return this.patenteAuto;
}

/*
public asignarAuto(marca:string, modelo:number, patente:number):void{
    let auto1: Autos = new Autos ("ford",2000,1234);
    let auto2: Autos = new Autos ("audi",2001,5678);
    let auto3: Autos = new Autos ("chevrolet",2005,9101);
    let auto4: Autos = new Autos ("ford",1995,1213);

    //this.asignarAuto.push(Autos);*/

}

let auto1: Autos = new Autos ("ford",2000,1234);
let auto2: Autos = new Autos ("audi",2001,5678);
let auto3: Autos = new Autos ("chevrolet",2005,9101);
let auto4: Autos = new Autos ("ford",1995,1213);

let asignarAuto : Autos [] = [auto1,auto2,auto3,auto4];

console.log(Autos);