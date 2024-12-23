import { Luchador } from "./Luchador";

export class SuperLuchador extends Luchador{
    //atributos
    protected nivel : number = 10;
    protected puntosDeVida : number = 250;
    protected energia : number = 150;

    //constructor
    constructor(nombre : string){
        super(nombre)
    }

    //metodos
    public subirDeNivel(): void {
        this.nivel++;
        this.puntosDeVida += 20;
        this.energia += 20;
        console.log(this.nombre + " ha subido a nivel " + this.nivel);
    }

    public superAtaque(): void {
        if(this.energia >= 20){
            console.log(this.nombre + " ha usado su super ataque. Puño del Dragon.")
            this.energia -= 20;
        } else {
            console.log("No dispones de energia suficiente para realizar el Super Ataque.")
        }
    }
}