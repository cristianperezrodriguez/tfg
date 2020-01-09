export class Pregunta {

    id: number;
    id_assignatura: number;
    id_activitat: number;
    numero_pregunta: number;
    valoracio_minima: number;
    valoracio_maxima: number;
    percentatge_correccio: number;
    fileName:string;

    constructor(id_assignatura:number, id_activitat:number, numero_pregunta:number, valoracio_minima:number, valoracio_maxima:number, percentatge_correccio:number, fileName:string)
    {
        this.id_assignatura = id_assignatura;
        this.id_activitat = id_activitat;
        this.numero_pregunta = numero_pregunta;
        this.valoracio_minima = valoracio_minima;
        this.valoracio_maxima = valoracio_maxima;
        this.percentatge_correccio = percentatge_correccio;
        this.fileName = fileName;
    }
}