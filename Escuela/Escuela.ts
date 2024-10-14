import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Escuela {
    //propiedades
    private nombreInstitucion: string;
    private listaDeAlumnos: Alumno[];
    private listaDeProfesores: Profesor[];

    //constructor
    constructor(nombre: string) {
        this.nombreInstitucion = nombre;
        this.listaDeAlumnos = [];
        this.listaDeProfesores = [];
    }

    //metodos
    public obtenerNombre(): string {
        return this.nombreInstitucion;
    }

    public matricularAlumno(alumno: Alumno): void {
        this.listaDeAlumnos.push(alumno);
    }

    public contratarProfesor(profesor: Profesor): void {
        this.listaDeProfesores.push(profesor);
    }

    public mostrarAlumnos(): Alumno[] {
        return this.listaDeAlumnos;
    }

    public mostrarProfesores(): Profesor[] {
        return this.listaDeProfesores;
    }

    public despedirProfesor(nombre: string): void {
        this.listaDeProfesores = this.listaDeProfesores.filter(profesor => profesor.obtenerNombre() !== nombre);
    }
    
    public expulsarAlumno(nombre: string): void {
        this.listaDeAlumnos = this.listaDeAlumnos.filter(alumno => alumno.obtenerNombre() !== nombre);
    }
}