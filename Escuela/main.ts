/*Aplicar lo visto hasta esta clase para modelar un
sistema educativo donde:
• Los profesores deben tener un listado de sus
alumnos.
• Cada alumno debe saber su nota e informar
si está aprobado o no (es decir si la nota es
mayor que 7).
• La escuela debe tener un registro de los
alumnos y maestros, y debe poder
matricular/contratar y expulsar/despedir a los
mismos.*/

import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";
import { Escuela } from "./Escuela";

const alumno1: Alumno = new Alumno("Juancito", 8);
const alumno2: Alumno = new Alumno("Marcos", 10);
const alumno3: Alumno = new Alumno("Maria", 4);
const alumno4: Alumno = new Alumno("Sofia", 9);

const profesor1: Profesor = new Profesor("Edgardo");
const profesor2: Profesor = new Profesor("Roberto");

const escuela: Escuela = new Escuela("Escuela San Antonio");

escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.matricularAlumno(alumno3);
escuela.matricularAlumno(alumno4);

escuela.contratarProfesor(profesor1);
escuela.contratarProfesor(profesor2);

profesor1.añadirAlumno(alumno1);
profesor1.añadirAlumno(alumno2);
profesor2.añadirAlumno(alumno3);
profesor2.añadirAlumno(alumno4);


//prueba
console.log(escuela.obtenerNombre());

console.log("\nLista de profesores con sus respectivos alumnos:");

escuela.mostrarProfesores().forEach(profesor =>{
    console.log("\nProfesor: "+ profesor.obtenerNombre());
    profesor.mostrarAlumnos().forEach(alumno =>{
        console.log("Alumno: " + alumno.obtenerNombre()+ " --- Nota: " + alumno.obtenerNota() + " " + alumno.estaAprobadoDesaprobado());
    });
});

console.log("\nDespedimos al profesor Edgardo y expulsamos al Alumno Juancito");
escuela.despedirProfesor("Edgardo");
escuela.expulsarAlumno("Juancito");

console.log("\nLista de profesores luego de un recorte salarial:");
escuela.mostrarProfesores().forEach(profesor => {
    console.log("Profesor: " + profesor.obtenerNombre());
});

console.log("\nLista de alumnos luego del recorte: ");   //los alumnos siguen estando solo que algunos sin profesor
escuela.mostrarAlumnos().forEach(alumno => {
    console.log("Alumno: " + alumno.obtenerNombre());
});