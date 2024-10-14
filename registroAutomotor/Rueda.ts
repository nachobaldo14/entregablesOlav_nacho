export class Rueda {
    //propiedades
    private tamaño: number;

    //constructor
    public constructor(tamaño: number) {
        this.tamaño = tamaño;
    }

    //metodos
    public getTamañoRueda(): number {
        return this.tamaño;
    }
}