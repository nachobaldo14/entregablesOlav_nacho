import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { Rueda } from "./Rueda";

export class RegistroAutomotor {
    private nombre: string;
    private listaAutos : Auto[];
    private listaCamiones : Camion[];
    private listaMotos : Moto[];

    constructor(nombre : string){
        this.nombre = nombre;
        this.listaAutos = [];
        this.listaCamiones = [];
        this.listaMotos = [];
    }

    //getters
    public getNombre(): string {
        return this.nombre;
    }
    public getListaAutos(): Auto[] {
        const copiaAutos : Auto[] = this.listaAutos.map(libro => ({...libro}) as Auto); //* forma implementada por mauricio en la clase el lunes
        console.log("Autos:");
        return copiaAutos;
    }
    public getListaMotos(): Moto[] {
        const copiaMotos : Moto[] = this.listaMotos.map(libro => ({...libro}) as Moto); //*
        console.log("Motos:");
        return copiaMotos;
    }
    public getListaCamiones(): Camion[] {
        const copiaCamiones : Camion[] = this.listaCamiones.map(libro => ({...libro}) as Camion); //*
        console.log("Camiones:");
        return copiaCamiones;
    }

    //setters
    public setNombre(nombre : string): void{
        if(nombre != undefined){
            this.nombre = nombre;
        }
    }

    //metodos agregar
    public agregarAuto(auto : Auto) : void {
        if(auto != undefined){
            this.listaAutos.push(auto);
        }
    }
    public agregarMoto(moto : Moto) : void {
        if(moto != undefined){
            this.listaMotos.push(moto);
        }
    }
    public agregarCamion(camion : Camion) : void {
        if(camion != undefined){
            this.listaCamiones.push(camion);
        }
    }

    //metodos eliminar
    public eliminarAuto(patente: string): void {
        const autoAEliminar = this.listaAutos.find(auto => auto.getPatente() === patente);
        if (autoAEliminar != undefined && this.listaAutos.includes(autoAEliminar)) {
            const posicionAuto: number = this.listaAutos.indexOf(autoAEliminar);
            this.listaAutos.splice(posicionAuto, 1);
            console.log("Se elimino el auto con patente " + patente);
        }
    }

    public eliminarMoto(patente: string): void {
        const motoAEliminar = this.listaMotos.find(moto => moto.getPatente() === patente);
        if (motoAEliminar != undefined && this.listaMotos.includes(motoAEliminar)) {
            const posicionMoto: number = this.listaMotos.indexOf(motoAEliminar);
            this.listaMotos.splice(posicionMoto, 1);
            console.log("Se elimino la moto con patente " + patente);
        }
    }

    public eliminarCamion(patente: string): void {
        const camionAEliminar = this.listaCamiones.find(camion => camion.getPatente() === patente);
        if (camionAEliminar != undefined && this.listaCamiones.includes(camionAEliminar)) {
            const posicionCamion: number = this.listaCamiones.indexOf(camionAEliminar);
            this.listaCamiones.splice(posicionCamion, 1);
            console.log("Se elimino el camion con patente " + patente);
        }
    }

    //metodos consultar
    public consultarAuto(patente : string): void{
        const autoAConsultar = this.listaAutos.find(auto => auto.getPatente() === patente);
        if(autoAConsultar != undefined && this.listaAutos.includes(autoAConsultar)){
            console.log(`Su busqueda: ${autoAConsultar.getMarca()} --- ${autoAConsultar.getModelo()} --- ${autoAConsultar.getPatente()} --- ${autoAConsultar.getRuedas()}`);
        } else if(patente.length >= 6 ){
            console.log("El auto patente " + patente + " no existe.");
        }
    }

    public consultarMoto(patente : string): void{
        const motoAConsultar = this.listaMotos.find(moto => moto.getPatente() === patente);
        if(motoAConsultar != undefined && this.listaMotos.includes(motoAConsultar)){
            console.log(`Su busqueda: ${motoAConsultar.getMarca()} --- ${motoAConsultar.getModelo()} --- ${motoAConsultar.getPatente()} --- ${motoAConsultar.getRuedas()} --- ${motoAConsultar.getColor()}`);
        } else if(patente.length >= 6){
            console.log("La moto patente " + patente + " no existe.");
        }
    }

    public consultarCamion(patente : string): void{
        const camionAConsultar = this.listaCamiones.find(camion => camion.getPatente() === patente);
        if(camionAConsultar != undefined && this.listaCamiones.includes(camionAConsultar)){
            console.log(`Su busqueda: ${camionAConsultar.getMarca()} --- ${camionAConsultar.getModelo()} --- ${camionAConsultar.getPatente()} --- ${camionAConsultar.getRuedas()} --- ${camionAConsultar.getCapacidadCarga()}`);
        } else if(patente.length >= 6){
            console.log("El camion patente " + patente + " no existe.");
        }
    }

    //metodos modificar
    public modificarAuto(patente : string, nuevaMarca : string, nuevoModelo : string, nuevasRuedas : Rueda[]): void{
        const autoAModificar = this.listaAutos.find(auto => auto.getPatente() === patente);
        if (autoAModificar != undefined && this.listaAutos.includes(autoAModificar) && nuevaMarca && nuevoModelo != "" && nuevasRuedas.length >= 4){
            autoAModificar.setMarca(nuevaMarca);
            autoAModificar.setModelo(nuevoModelo);
            autoAModificar.setRuedas(nuevasRuedas);
            console.log("Modificacion al auto patente " + patente + " realizada con exito.")
        }else{
            console.log("Datos ingresados no validos.")
        }
    }

    public modificarMoto(patente : string, nuevaMarca : string, nuevoModelo : string, nuevoColor : string, nuevasRuedas : Rueda[]): void{
        const motoAModificar = this.listaMotos.find(moto => moto.getPatente() === patente);
        if (motoAModificar != undefined && this.listaMotos.includes(motoAModificar) && nuevaMarca && nuevoModelo && nuevoColor != "" && nuevasRuedas.length >= 2){
            motoAModificar.setMarca(nuevaMarca);
            motoAModificar.setModelo(nuevoModelo);
            motoAModificar.setColor(nuevoColor);
            motoAModificar.setRuedas(nuevasRuedas);
            console.log("Modificacion a la moto patente " + patente + " realizada con exito.")
        } else{
            console.log("Datos ingresados no validos.")
        }
    }

    public modificarCamion(patente : string, nuevaMarca : string, nuevoModelo : string, nuevaCapacidadCarga : number, nuevasRuedas : Rueda[]): void{
        const camionAModificar = this.listaCamiones.find(camion => camion.getPatente() === patente);
        if (camionAModificar != undefined && this.listaCamiones.includes(camionAModificar) && nuevaMarca && nuevoModelo != "" && nuevaCapacidadCarga > 0 && nuevasRuedas.length >= 4){
            camionAModificar.setMarca(nuevaMarca);
            camionAModificar.setModelo(nuevoModelo);
            camionAModificar.setCapacidadCarga(nuevaCapacidadCarga);
            camionAModificar.setRuedas(nuevasRuedas);
            console.log("Modificacion al camion patente " + patente + " realizada con exito.")
        } else{
            console.log("Datos ingresados no validos.")
        }
    }
}