import { Personaje } from "./Personaje";

export class Arquero extends Personaje{
    //atributos
    protected flechasVenenosas : number = 5;

    //constructor
    constructor(nombre : string){
        super(nombre);
    }

    //getter y setter
    public getFlechasVenenosas(): number{
        return this.flechasVenenosas;
    }
    public setFlechasVenenosas(flechas : number): void{
        if(flechas != undefined && flechas >= 0){
            this.flechasVenenosas = flechas;
        }
    }

    //metodos
    public atacar(): void {
        console.log(this.nombre + " ha lanzado una flecha rapida.");
    }

    public defender(): void {
        console.log(this.nombre + " se ha cubierto con su capa.");
    }

    public ataqueMejorado(): void {
        if(this.nivel >= 2 && this.flechasVenenosas > 0){
            console.log(this.nombre + " ha lanzado una flecha venenosa.");
            this.flechasVenenosas --;
        }else if(this.nivel <= 1){
            console.log(this.nombre + " necesita ser nivel 2 o superior para realizar su ataque mejorado. Nivel actual: " + this.nivel);
        }else {
            console.log("No dispones de flechas venenosas suficientes para realizar el ataque mejorado.")
        }
    }

    public subirDeNivel(): void {
        if(this.nivel < 9){
            this.nivel++;
            this.puntosDeVida += 5;
            this.flechasVenenosas += 2;
            console.log(this.nombre + " ha subido a nivel " + this.nivel);
        }else{
            console.log(this.nombre + " ha alcanzado el nivel maximo. Evoluciona para seguir progresando.")
        }
    }
}