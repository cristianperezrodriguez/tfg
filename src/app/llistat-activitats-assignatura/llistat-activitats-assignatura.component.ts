import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignaturesService } from '../_services/assignatures.service';
import { Assignatura } from '../_models/assignatura';
import { first } from 'rxjs/operators';
import { ActivitatsService } from '../_services/activitats.service';
declare var $: any;

@Component({
  selector: 'app-llistat-activitats-assignatura',
  templateUrl: './llistat-activitats-assignatura.component.html',
  styleUrls: ['./llistat-activitats-assignatura.component.css']
})
export class LlistatActivitatsAssignaturaComponent implements OnInit {

  public activitats = [];
  public columnDefs = [
    {field: 'nom', sortable: true, filter: true , headerName: 'Nom'},
    {field: 'data', sortable: true, filter: true , headerName: 'Data del examen'},
    {field: 'percentatge_correccio', sortable: true, filter: true , headerName: 'Percentatge de correcció', cellRenderer: function(params) {
        return '<span style="position: absolute;">'+params.value*100+'%</span><span class="fonsPercentatge" style="position: absolute;width:'+params.value*100+'%;height: 100%;background-color: rgb(89, 202, 89);z-index: -1;"></span>';
      },
      cellStyle: function(params) {
        // return {color: 'red', backgroundColor: 'green'};
      }

    }
  ];

  public rowData;
  
  public style = {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
  };

  constructor( public router: Router, public route: ActivatedRoute, public activitatService: ActivitatsService) 
  { 
  }
  
  ngOnInit() {
    this.getActivitatsAssignatura();
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  private getActivitatsAssignatura() {
    var idAssignatura = +this.route.snapshot.paramMap.get('id');
    var activitats = this.activitatService.getAllByIdAssignatura(idAssignatura);
    this.rowData = activitats;
  }
  
}
