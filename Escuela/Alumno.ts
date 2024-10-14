export class Alumno {
    // propiedades
    private nombre: string;
    private nota: number;

    // constructor
    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

    //metodos
    public estaAprobadoDesaprobado(): string {
        if(this.nota >= 7){
            return "aprobado";
        } else{
            return "desaprobado";
        }
    }

    public obtenerNota(): number {
        return this.nota;
    }

    public obtenerNombre(): string {
        return this.nombre;
    }
}