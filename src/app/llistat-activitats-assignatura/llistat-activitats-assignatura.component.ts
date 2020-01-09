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
    {field: 'id', sortable: true, resizable: true, maxWidth: 70, filter: true , headerName: 'Id', cellClass: "verticalAlignText"},
    {field: 'nom', sortable: true, resizable: true, filter: true , headerName: 'Nom', cellClass: "verticalAlignText"},
    {field: 'data', sortable: true, resizable: true, maxWidth: 150, filter: true , headerName: 'Data del examen', cellClass: "verticalAlignText"},
    {field: 'percentatge_correccio', resizable: true, sortable: true, filter: true , headerName: 'Percentatge de correcció', cellClass: ["verticalAlignText","horizontalAlignText"], cellRenderer: function(params) {
        return '<span>'+params.value*100+'%</span><span class="fonsPercentatge" style="width:'+params.value*100+'%"></span>';
    }},
    {
      headerName: '',
      cellClass: "verticalAlignText",
      cellRendererFramework: ButtonRendererComponent,
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Preguntes',
        materialIcon: 'format_list_numbered',
        title: 'LListat de preguntes'
      },
      autoHeight: true
    },
    
  ];
  onGridSizeChanged(params){
    params.api.sizeColumnsToFit();
  }
  ngOnInit() {
    this.getActivitatsAssignatura();
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
    window.onresize = () => {
      params.api.sizeColumnsToFit();
    }
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
