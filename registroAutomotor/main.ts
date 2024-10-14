import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { Rueda } from "./Rueda";
import { RegistroAutomotor } from "./RegistroAutomotor";

const ruedasPrimerAuto: Rueda[] = [new Rueda(16), new Rueda(16), new Rueda(16), new Rueda(16)];
const ruedasSegundoAuto: Rueda[] = [new Rueda(15.5), new Rueda(15.5), new Rueda(15.5), new Rueda(15.5)];
const ruedasPrimerMoto: Rueda[] = [new Rueda(17), new Rueda(17)];
const ruedasPrimerCamion: Rueda[] = [new Rueda(20), new Rueda(20), new Rueda(20), new Rueda(20), new Rueda(20), new Rueda(20)];

let autoAudi : Auto = new Auto("Audi", "Sedan", ruedasPrimerAuto,"XX100ZZ");
let autoFord : Auto = new Auto("Ford", "Focus", ruedasSegundoAuto,"Y555555");
let motoSuzuki : Moto = new Moto("Suzuki", "SF 150", "Azul", ruedasPrimerMoto,"NBM500");
let camionScania : Camion = new Camion("Scania", "V8", 5000, ruedasPrimerCamion,"ZZ200LL");

const registroAutomotor : RegistroAutomotor = new RegistroAutomotor("Nacho Registro");

registroAutomotor.agregarAuto(autoAudi);
registroAutomotor.agregarAuto(autoFord);
registroAutomotor.agregarMoto(motoSuzuki);
registroAutomotor.agregarCamion(camionScania);

console.log(registroAutomotor.getNombre() + "\n");      //get registro

console.log(registroAutomotor.getListaAutos());
registroAutomotor.eliminarAuto("Y555555");              //auto
registroAutomotor.consultarAuto("Y555555");

console.log(registroAutomotor.getListaMotos());
registroAutomotor.eliminarMoto("NBM500");               //moto
registroAutomotor.consultarMoto("NBM500");

console.log(registroAutomotor.getListaCamiones());
registroAutomotor.eliminarCamion("ZZ200LL")             //camion
registroAutomotor.consultarCamion("ZZ200LL")

registroAutomotor.modificarAuto("XX100ZZ", "Ford", "Focus", ruedasPrimerAuto);   //modificar auto
registroAutomotor.consultarAuto("XX100ZZ");

registroAutomotor.modificarMoto("NBM500", "Yamaha", "", "Verde", ruedasPrimerMoto)       //modificar moto
registroAutomotor.consultarMoto("NBM500");

registroAutomotor.modificarCamion("ZZ200LL", "NuevoScania", "Carga", 30000, ruedasPrimerCamion)      //modificar camion
registroAutomotor.consultarCamion("ZZ200LL");