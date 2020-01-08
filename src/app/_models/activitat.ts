export class Activitat {

    id: number;
    id_assignatura: number;
    nom: string;
    data: Date;
    fileName: string;
    percentatge_correccio: number;

    constructor(id_assignatura:number, nom:string, data:Date, fileName:string, percentatge_correccio:number)
    {
        this.id_assignatura = id_assignatura;
        this.nom = nom;
        this.data = data;
        this.fileName = fileName;
        this.percentatge_correccio = percentatge_correccio;
    }
}