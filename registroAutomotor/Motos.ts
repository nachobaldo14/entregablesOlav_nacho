export class Motos {
    private marcaMoto: string;
    private modeloMoto: number;
    private patenteMoto: number;

    public constructor(marca: string, modelo: number, patente:number) {
        this.marcaMoto = marca;
        this.modeloMoto = modelo;
        this.patenteMoto = patente;
    }
    
    public getmarcaMoto():string {
        return this.marcaMoto;
    }
    
    public getmodeloMoto():number {
        return this.modeloMoto;
    }
    
    public getpatenteMoto():number {
        return this.patenteMoto;
    }

public asignarAuto(marca:string, modelo:number, patente:number):void{
    let motos1 = new Motos ("Harley Davidson",1990,7391);
    let motos2 = new Motos ("Ducati",2005,7139);
    let motos3 = new Motos ("BMW",2003,8520);
    let motos4 = new Motos ("Honda",2024,9634);
    
   // this.asignarAuto.push(Motos);
}
}