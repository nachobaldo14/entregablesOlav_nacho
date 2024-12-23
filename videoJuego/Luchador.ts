import { Personaje } from "./Personaje";

export class Luchador extends Personaje {
    //atributos
    protected energia : number = 50;

    //constructor
    constructor(nombre : string){
        super(nombre);
    }

    //getter y setter
    public getEnergia(): number{
        return this.energia;
    }
    public setEnergia(energia : number): void{
        if(energia != undefined && energia >= 0){
            this.energia = energia;
        }
    }

    //metodos
    public atacar(): void {
        console.log(this.nombre + " ha lanzado un golpe.");
    }

    public defender(): void {
        console.log(this.nombre + " se ha cubierto con su escudo.")
    }

    public ataqueMejorado(): void {
        if(this.nivel >= 2 && this.energia >= 10){
            console.log(this.nombre + " ha realizado un golpe potente.");
            this.energia -= 10;
        }else if(this.nivel <= 1){
            console.log(this.nombre + " necesita ser nivel 2 o superior para realizar su ataque mejorado. Nivel actual: " + this.nivel);
        }else {
            console.log("No dispones de energia suficiente para realizar el ataque mejorado.")
        }
    }

    public subirDeNivel(): void {
        if(this.nivel < 9){
            this.nivel++;
            this.puntosDeVida += 5;
            this.energia += 5;
            console.log(this.nombre + " ha subido a nivel " + this.nivel);
        }else{
            console.log(this.nombre + " ha alcanzado el nivel maximo. Evoluciona para seguir progresando.")
        }
    }
}