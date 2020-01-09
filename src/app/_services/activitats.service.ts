import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Activitat } from '../_models/activitat';

@Injectable({ providedIn: 'root' })
export class ActivitatsService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Activitat[]>(`${environment.apiUrl}/activitats`);
    }

    getAllByIdAssignatura(id: number) {
        return this.http.get<Activitat[]>(`${environment.apiUrl}/activitats/byAssignatura/${id}`);
    }

    get(id: number) {
        return this.http.get(`${environment.apiUrl}/activitats/${id}`);
    }

    addNewActivitat(activitat:Activitat){
        return this.http.post(`${environment.apiUrl}/activitats/add`,activitat);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/activitats/${id}`);
    }
}