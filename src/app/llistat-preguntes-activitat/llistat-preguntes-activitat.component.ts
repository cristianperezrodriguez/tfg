import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignaturesService } from '../_services/assignatures.service';
import { Assignatura } from '../_models/assignatura';
import { first } from 'rxjs/operators';
import { PreguntesService } from '../_services/preguntes.service';
import { ButtonRendererComponent } from '../button-renderer/button-renderer.component';
declare var $: any;

@Component({
  selector: 'app-llistat-preguntes-activitat',
  templateUrl: './llistat-preguntes-activitat.component.html',
  styleUrls: ['./llistat-preguntes-activitat.component.css']
})
export class LlistatPreguntesActivitatComponent implements OnInit {

  frameworkComponents: any;
  preguntes = [];
  rowData;
  domLayout='autoHeight';
  style = {
    width: '100%',
    boxSizing: 'border-box'
  };
  
  constructor( public router: Router, public route: ActivatedRoute, public preguntesService: PreguntesService) 
  { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  columnDefs = [
    // {field: 'id', sortable: true, resizable: true, maxWidth: 70, filter: true , headerName: 'Id', cellClass: "verticalAlignText"},
    {field: 'numero_pregunta', sortable: true, resizable: true, filter: true , headerName: '#Pregunta', cellClass: "verticalAlignText"},
    {field: 'valoracio_minima', sortable: true, resizable: true, filter: true , headerName: 'Valoració Mínima', cellClass: "verticalAlignText"},
    {field: 'valoracio_maxima', sortable: true, resizable: true, filter: true , headerName: 'Valoració Mànima', cellClass: "verticalAlignText"},
    {field: 'percentatge_correccio', resizable: true, sortable: true, filter: true , headerName: 'Percentatge de correcció', cellClass: ["verticalAlignText","horizontalAlignText"], cellRenderer: function(params) {
        return '<span>'+params.value*100+'%</span><span class="fonsPercentatge" style="width:'+params.value*100+'%"></span>';
    }},
    {
      headerName: '',
      cellClass: ["verticalAlignText","horizontalAlignText"],
      cellRendererFramework: ButtonRendererComponent,
      cellRendererParams: {
        onClick: this.onClickButtonCorregitPregunta.bind(this),
        label: 'Corregir',
        // materialIcon: 'format_list_numbered',
        title: 'Corregir pregunta'
      },
      autoHeight: true,
      maxWidth: 80,
      minWidth: 60
    },
    
  ];

  ngOnInit() {
    this.getPreguntesByAssignaturaAndActivitat();
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

  getPreguntesByAssignaturaAndActivitat() {
    var id_assignatura = +this.route.snapshot.paramMap.get('id');
    var id_activitat = +this.route.snapshot.paramMap.get('id_activitat');
    var preguntes = this.preguntesService.byAssignaturaAndActivitat(id_assignatura, id_activitat);
    this.rowData = preguntes;
  }
 
  // llistatActivitatsAssignatura(id:number){
  //   this.router.navigate(['/llistatActivitatsAssignatura/' + id]);
  // }

  onClickButtonCorregitPregunta(e) {
    alert("nav -> corregir pregunta");
  }


}