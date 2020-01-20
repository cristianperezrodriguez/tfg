import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, AlertService } from '../_services';
import { AssignaturesService } from '../_services/assignatures.service';
import { ActivitatsService } from '../_services/activitats.service';
import { PreguntesService } from '../_services/preguntes.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { _ } from 'underscore';
declare var $: any;

@Component({
  selector: 'app-carrega-criteris-csv',
  templateUrl: './carrega-criteris-csv.component.html',
  styleUrls: ['./carrega-criteris-csv.component.css']
})
export class CarregaCriterisCSVComponent implements OnInit {

  returnUrl: string;
  assignatura;
  activitat;
  uploadedFileName:string;
  submitted = false;
  preguntes =  [];
  criteris =  [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private assignaturesService: AssignaturesService,
    private activitatsService: ActivitatsService,
    private preguntesService: PreguntesService,
    private alertService: AlertService,
    private http: HttpClient
) { }

  ngOnInit() {
    this.getDades();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  private getDades() {
    var id = +this.route.snapshot.paramMap.get('id');
    //get Activitat
    this.activitat = this.activitatsService.get(id)
    .pipe(first())
    .subscribe(res => {
      this.activitat = res;
      this.assignaturesService.get(this.activitat.id_assignatura)
      .pipe(first())
      .subscribe(res2 => this.assignatura = res2);
    });

  }
  
  
  cancelar()
  {
    this.router.navigate([this.returnUrl]);

  }

  title = 'csvTOjson works!';
  text  : any ;
  JSONDataPreguntes : any;
  JSONDataCriteris : any;


  csvJSON(csvText) {
    this.preguntes = [];
    var preguntesCriteris = csvText.split("\n***criteris***");
    var linesPreguntes = preguntesCriteris[0].trim().split("\n");
    var linesCriteris = preguntesCriteris[1].trim().split("\n");

    var resultPreguntes = [];
    var headersPreguntes = linesPreguntes[0].split(",");
    for (var i = 1; i < linesPreguntes.length; i++) {

        var obj = {};
        var currentline = linesPreguntes[i].split(",");

        for (var j = 0; j < headersPreguntes.length; j++) {
          headersPreguntes[j] = headersPreguntes[j].replace("\r", '');
          obj[headersPreguntes[j]] = currentline[j].replace("\r", '');
        }
        resultPreguntes.push(obj);
    }
    this.preguntes = resultPreguntes;
    var resultCriteris = [];
    var headersCriteris = linesCriteris[0].split(",");
    for (var i = 1; i < linesCriteris.length; i++) {

        var obj = {};
        var currentline = linesCriteris[i].split(",");

        for (var j = 0; j < headersCriteris.length; j++) {
          headersCriteris[j] = headersCriteris[j].replace("\r", '');
          obj[headersCriteris[j]] = currentline[j].replace("\r", '');
        }
        resultCriteris.push(obj);
    }
    this.criteris = resultCriteris;
    
    this.preguntes.forEach(pregunta => {
      var idPregunta = pregunta.numero_pregunta;
      var criterisPregunta = _.filter(this.criteris, function(criteri){
        return criteri.num_pregunta == idPregunta;
      });
      pregunta.criteris = criterisPregunta;
    });


    this.JSONDataPreguntes = JSON.stringify(resultPreguntes);
    this.JSONDataCriteris = JSON.stringify(resultCriteris);
  }
  
  
  guardarCriteris() {
    this.submitted = true;
    //
    if(!this.uploadedFileName)
      return;
  
    
    alert("Criteris Guardats.");
    var id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/llistatActivitatsAssignatura/' + id]);
  }
  
  
   convertFile(input) {
    this.uploadedFileName = input.files[0].name;
    const reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = () => {
       let text = reader.result;
       this.text = text;
       console.log(text);
       this.csvJSON(text);
    };
  
  }

}
