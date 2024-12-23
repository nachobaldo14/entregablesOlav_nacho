import { Arquero } from "./Arquero";

export class SuperArquero extends Arquero{
    //atributos
    protected nivel : number = 10;
    protected puntosDeVida : number = 250;
    protected flechasVenenosas : number = 15;

    //constructor
    constructor(nombre : string){
        super(nombre)
    }

    //metodos
    public subirDeNivel(): void {
        this.nivel++;
        this.puntosDeVida += 20;
        this.flechasVenenosas += 5;
        console.log(this.nombre + " ha subido a nivel " + this.nivel);
    }

    public superAtaque(): void {
        if(this.flechasVenenosas >= 5){
            console.log(this.nombre + " ha usado su super ataque. Lluvia de Flechas Venenosas.")
            this.flechasVenenosas -= 5;
        }else {
            console.log("No dispones de flechas venenosas suficientes para realizar el Super Ataque.")
        }
    }
}