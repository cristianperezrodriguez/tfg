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
  progressBarRenderer = function(params) {
    var percent = params.value*100;
    return '<div class="progress"><div class="bg-success progress-bar" style="width:'+percent+'%"  role="progressbar" aria-valuenow="'+percent+'" aria-valuemin="0" aria-valuemax="100">'+percent+'%</div></div>';
  };
  domLayout='autoHeight';
  style = {
    width: '100%',
    boxSizing: 'border-box'
  };
  
  constructor( public router: Router, public route: ActivatedRoute, public activitatService: ActivitatsService) 
  { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  columnDefs = [
    // {field: 'id', sortable: true, resizable: true, maxWidth: 70, filter: true , headerName: 'Id', cellClass: "verticalAlignText"},
    {field: 'nom', sortable: true, resizable: true, filter: true , headerName: 'Nom', cellClass: "verticalAlignText"},
    {field: 'data', sortable: true, resizable: true, maxWidth: 150, minWidth: 90, filter: true , headerName: 'Data del examen', cellClass: "verticalAlignText"},
    {field: 'percentatge_correccio', resizable: true, sortable: true, filter: true , headerName: 'Percentatge de correcció', cellClass: "verticalAlignText", cellRenderer: this.progressBarRenderer},
    {
      headerName: '',
      cellClass:  ["verticalAlignText","horizontalAlignText"],
      cellRendererFramework: ButtonRendererComponent,
      cellRendererParams: {
        onClick: this.onClickButtonLlistatPreguntes.bind(this),
        label: 'Preguntes',
        title: 'LListat de preguntes'
      },
      autoHeight: true,
      maxWidth: 100,
      minWidth: 80
    },
    {
      headerName: '',
      cellClass: ["verticalAlignText","horizontalAlignText"],
      cellRendererFramework: ButtonRendererComponent,
      cellRendererParams: {
        onClick: this.onClickButtonCorregirActivitat.bind(this),
        label: 'Corregir',
        title: 'Corregir examen'
      },
      autoHeight: true,
      maxWidth: 80,
      minWidth: 60
    }
    
  ];

  ngOnInit() {
    this.getActivitatsAssignatura();
  }
  
  onGridSizeChanged(params){
    params.api.sizeColumnsToFit();
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
    // window.onresize = () => {
    //   params.api.sizeColumnsToFit();
    // }
  }

  getActivitatsAssignatura() {
    var idAssignatura = +this.route.snapshot.paramMap.get('id');
    var activitats = this.activitatService.getAllByIdAssignatura(idAssignatura);
    this.rowData = activitats;
  }
 
  llistatPreguntesActivitat(id_assignatura:number, id_activitat:number){
    this.router.navigate(['/llistatPreguntesActivitat/' + id_assignatura + '/' + id_activitat]);
  }

  onClickButtonLlistatPreguntes(e) {
    this.llistatPreguntesActivitat(e.rowData.id_assignatura, e.rowData.id);
  }

  corregirActivitat(id_activitat:number){
    this.router.navigate(['/corregirActivitat/' + id_activitat]);
  }

  onClickButtonCorregirActivitat(e) {
    this.corregirActivitat(e.rowData.id);
  }

}
