import { Alumno } from "./Alumno";

export class Profesor{

    //propiedades
    private nombre : string;
    private listaDeAlumnos : Alumno[];

    //constructor
    constructor(parNombre : string){
        this.nombre = parNombre;
        this.listaDeAlumnos = [];
    }

    //metodos
    public obtenerNombre():string {
        return this.nombre;
    }

    public añadirAlumno(alumno : Alumno): void{
        this.listaDeAlumnos.push(alumno);
    }

    public mostrarAlumnos(): Alumno[] {
        return this.listaDeAlumnos;
    }
}