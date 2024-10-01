

export class Camiones {
    private marcaCamion: string;
    private modeloCamion: number;
    private patenteCamion: number;

    public constructor(marca: string, modelo: number, patente:number) {
        this.marcaCamion = marca;
        this.modeloCamion = modelo;
        this.patenteCamion = patente;
    }

    public getmarcaCamion():string {
        return this.marcaCamion;
    }
    
    public getmodeloCamion():number {
        return this.modeloCamion;
    }
    
    public getpatenteCamion():number {
        return this.patenteCamion;
    }

//set
    public setmarcaCamion():string {
        return this.marcaCamion;
    }
    
    public setmodeloCamion():number {
        return this.modeloCamion;
    }
    
    public setpatenteCamion():number {
        return this.patenteCamion;
    }

    /*
public asignarAuto(marca:string, modelo:number, patente:number):void{
    let camion1: Camiones = new Camiones ("Scania",2013,9876);
    let camion2: Camiones = new Camiones ("Mercedes Benz",2008,5432);
    let camion3: Camiones = new Camiones ("Renault",1999,2130);
    let camion4: Camiones = new Camiones ("Isuzu",2020,4063);
    
    //this.asignarAuto.push(Camiones);
}*/
}

let camion1: Camiones = new Camiones ("Scania",2013,9876);
let camion2: Camiones = new Camiones ("Mercedes Benz",2008,5432);
let camion3: Camiones = new Camiones ("Renault",1999,2130);
let camion4: Camiones = new Camiones ("Isuzu",2020,4063);

let asignarCamion: Camiones [] = [camion1,camion2,camion3,camion4];

console.log(asignarCamion);