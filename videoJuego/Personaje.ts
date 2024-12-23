export abstract class Personaje {
    //atributos
    protected nombre : string;
    protected nivel : number = 1;
    protected puntosDeVida : number = 100;

    //constructor
    constructor(nombre : string){
        this.nombre = nombre;
    }

    //getters
    public getNombre() : string{
        return this.nombre;
    }
    public getNivel(): number{
        return this.nivel;
    }
    public getPuntosDeVida(): number{
        return this.puntosDeVida;
    }

    //setters
    public setNombre(nombre : string): void{
        if(nombre != undefined){
            this.nombre = nombre;
        }
    }
    public setNivel(nivel : number): void{
        if(nivel != undefined && nivel >= 1){
            this.nivel = nivel;
        }
    }
    public setPuntosDeVida(vida : number): void{
        if(vida != undefined && vida >= 0){
            this.puntosDeVida = vida;
        }
    }

    //metodos
    abstract atacar(): void;
    abstract defender(): void;
    abstract ataqueMejorado(): void;
    abstract subirDeNivel(): void;
}