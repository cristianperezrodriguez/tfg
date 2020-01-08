import { Component, AfterViewInit } from '@angular/core';

import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import { AssignaturesService } from '../_services/assignatures.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
declare var require: any;

const data: any = require('./data.json');

export interface Chart {
	type: ChartType;
	data: Chartist.IChartistData;
	options?: any;
	responsiveOptions?: any;
	events?: ChartEvent;
}

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
	ngAfterViewInit() {}
	assignatures = [];

    constructor(
        private assignaturaService: AssignaturesService,
        private router: Router
    ) {
        
    }

	ngOnInit() {
        this.loadAllAssignatures();
    }


    private loadAllAssignatures() {
        this.assignaturaService.getAll()
            .pipe(first())
            .subscribe(assignatures => this.assignatures = assignatures);
    }

    newAssignatura(){
        this.router.navigate(['/novaAssignatura/']);
    }
    
    infoAssignatura(id:number){
        this.router.navigate(['/infoAssignatura/' + id]);
    }

    llistatActivitatsAssignatura(id:number){
        this.router.navigate(['/llistatActivitatsAssignatura/' + id]);
    }
}
