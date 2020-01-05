export class Activitat {

    id: number;
    id_assignatura: number;
    nom: string;
    data: Date;
    fileName: string;

    constructor(id_assignatura:number, nom:string, data:Date, fileName:string)
    {
        this.id_assignatura = id_assignatura;
        this.nom = nom;
        this.data = data;
        this.fileName = fileName;
    }
}