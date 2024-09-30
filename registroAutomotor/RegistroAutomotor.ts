import {Autos} from "./Autos";
import {Camiones} from "./Camiones"; 
import {Motos} from "./Motos";

export class RegistroAutomotor{

    private Autos:Autos [] = [];
    private Camiones:Camiones [] = [];
    private Motos:Motos [] = [];

    constructor(autos:Autos[], camiones:Camiones[], motos:Motos[]){
        this.Autos = [];
        this.Camiones = [];
        this.Motos = [];
    }

getAutos(): Autos[] {
    return this.Autos;
}

getCamiones(): Camiones[] {
    return this.Camiones;
}

getMotos(): Motos[] {
    return this.Motos;
}
}


