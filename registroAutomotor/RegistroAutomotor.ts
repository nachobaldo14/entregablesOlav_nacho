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


// Agregar Vehículo
public agregarAuto(autoNuevo: Autos): void {
    this.Autos.push(autoNuevo);
}

public agregarCamiones(camionNuevo: Camiones): void {
    this.Camiones.push(camionNuevo);
}

public agregarMoto(motoNueva: Motos): void {
    this.Motos.push(motoNueva);
}

// Modificar un vehículo
public modificarAuto(index: number, autos: Autos): void {
    if (index >= 0 && index < this.Autos.length) {
        this.Autos[index] = autos;
    } else {
        throw new Error("No hay Autos");
    }
}

public modificarMoto(index: number, motos: Motos): void {
    if (index >= 0 && index < this.Motos.length) {
        this.Motos[index] = motos;
    } else {
        throw new Error("No hay Motos");
    }
}

public modificarCamion(index: number, camiones :Camiones): void {
    if (index >= 0 && index < this.Camiones.length) {
        this.Camiones[index] = camiones;
    } else {
        throw new Error("No hay camiones");
    }
}

// Dar de baja un vehículo

public darDeBajaAuto(index: number): void {
    if (index >= 0 && index < this.Autos.length) {
        this.Autos.splice(index, 1);
    }
}
public darDeBajaMoto(index: number): void {
    if (index >= 0 && index < this.Motos.length) {
        this.Autos.splice(index, 1);
    }
}
public darDeBajaCamiones(index: number): void {
    if (index >= 0 && index < this.Camiones.length) {
        this.Autos.splice(index, 1);
    }
}

}

// Ejemplo de uso
const registro = new RegistroAutomotor(Autos[1],Motos[1],Camiones[1]);

registro.agregarAuto(new Autos('Toyota', 2020 , 5550));
registro.agregarMoto(new Motos('Yamaha', 2021, 6666));
registro.agregarCamiones(new Camiones('Mercedes', 2019, 7777));























