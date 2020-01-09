import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignaturesService } from '../_services/assignatures.service';
import { Assignatura } from '../_models/assignatura';
import { first } from 'rxjs/operators';
import { ActivitatsService } from '../_services/activitats.service';
import { ButtonRendererComponent } from '../button-renderer/button-renderer.component';
declare var $: any;

@Component({
  selector: 'app-llistat-activitats-assignatura',
  templateUrl: './llistat-activitats-assignatura.component.html',
  styleUrls: ['./llistat-activitats-assignatura.component.css']
})
export class LlistatActivitatsAssignaturaComponent implements OnInit {

  frameworkComponents: any;
  activitats = [];
  rowData;
  style = {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
  };
  
  constructor( public router: Router, public route: ActivatedRoute, public activitatService: ActivitatsService) 
  { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  columnDefs = [
    {field: 'id', sortable: true, resizable: true, maxWidth: 70, filter: true , headerName: 'Id'},
    {field: 'nom', sortable: true, resizable: true, filter: true , headerName: 'Nom'},
    {field: 'data', sortable: true, resizable: true, maxWidth: 150, filter: true , headerName: 'Data del examen'},
    {field: 'percentatge_correccio', resizable: true, sortable: true, filter: true , headerName: 'Percentatge de correcció', cellRenderer: function(params) {
        return '<span style="position: absolute;">'+params.value*100+'%</span><span class="fonsPercentatge" style="position: absolute;width:'+params.value*100+'%;height: 100%;background-color: rgb(89, 202, 89);z-index: -1;"></span>';
    }},
    {
      headerName: 'Accións',
      cellRendererFramework: ButtonRendererComponent,
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: '',
        materialIcon: 'format_list_numbered',
        title: 'LListat de preguntes'
      },
      autoHeight: true
    },
    
  ];
  ngOnInit() {
    this.getActivitatsAssignatura();
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  getActivitatsAssignatura() {
    var idAssignatura = +this.route.snapshot.paramMap.get('id');
    var activitats = this.activitatService.getAllByIdAssignatura(idAssignatura);
    this.rowData = activitats;
  }
 
  llistatActivitatsAssignatura(id:number){
    this.router.navigate(['/llistatActivitatsAssignatura/' + id]);
  }
  onBtnClick1(e) {
    this.llistatActivitatsAssignatura(e.rowData.id);
  }
  
  onBtnClick2(e) {
    alert(e);
  }
}
