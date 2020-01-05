export class Prova {
    
    id: number;
    codi_assignatura: string;
    nom: string;
    data: Date;

    constructor(codi_assignatura: string, nom: string, data: Date){
        this.codi_assignatura=codi_assignatura;
        this.nom=nom;
        this.data = data;
    }
}