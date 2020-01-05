export class Assignatura {
    
    id: number;
    codi: string;
    nom: string;
    any:string;

    constructor(codi: string, nom: string, any: string){
        this.codi=codi;
        this.nom=nom;
        this.any = any;
    }
}