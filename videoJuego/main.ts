import { Arquero } from "./Arquero";
import { Luchador } from "./Luchador";
import { SuperArquero } from "./SuperArquero";
import { SuperLuchador } from "./SuperLuchador";


let luchador = new Luchador("Luchadorcito");
luchador.atacar();
luchador.defender();
luchador.ataqueMejorado();
luchador.subirDeNivel();
luchador.ataqueMejorado();

let arquero = new Arquero("Arquerito");
arquero.atacar();
arquero.defender();
arquero.ataqueMejorado();
arquero.subirDeNivel();
arquero.ataqueMejorado();

luchador = new SuperLuchador(luchador.getNombre()); //evolucion manteniendo el nombre
((luchador) as SuperLuchador). superAtaque(); //uso de casting

arquero = new SuperArquero(arquero.getNombre());
((arquero) as SuperArquero).superAtaque();
