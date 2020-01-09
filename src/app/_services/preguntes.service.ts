import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Pregunta } from '../_models/pregunta';

@Injectable({ providedIn: 'root' })

export class PreguntesService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Pregunta[]>(`${environment.apiUrl}/preguntes`);
    }

    byAssignaturaAndActivitat(id_assignatura:number, id_activitat: number) {
        return this.http.get<Pregunta[]>(`${environment.apiUrl}/preguntes/byAssignaturaAndActivitat/${id_assignatura}/${id_activitat}`);
    }

    get(id: number) {
        return this.http.get(`${environment.apiUrl}/preguntes/${id}`);
    }

    addNewActivitat(activitat:Pregunta){
        return this.http.post(`${environment.apiUrl}/preguntes/add`,activitat);
    }

    update(id: number) {
        return this.http.delete(`${environment.apiUrl}/preguntes/${id}`);
    }
}