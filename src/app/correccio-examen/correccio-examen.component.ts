import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { _ } from 'underscore';
declare var $: any;

@Component({
  selector: 'app-correccio-examen',
  templateUrl: './correccio-examen.component.html',
  styleUrls: ['./correccio-examen.component.css']
})
export class CorreccioExamenComponent implements OnInit {
  
  examen: any;
  preguntes: any;
  criteris: any;
  tamanyExamen1: number[] = [2480,10547];
  tamanyExamen2: number[] = [2480,5976];
  tamanysCapceleraIPreguntes: number[] = [509,1572 - 509,2162 - 1572,3453 - 2162,3879 - 3453,5042 - 3872,5976 - 5042];
  currentSection = 'pregunta1';

  constructor( public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.onResize();
    $("#parentDiv").height($("#parentDiv").height() - $(".navegacioPreguntes").height());
    _.each($(".menuPregunta"), function(a,b,c){
      if(a.id != "criteris-" + this.currentSection){
        $(a).removeClass("criterisVisibles");
        $(a).addClass("criterisNoVisibles");
      } else {
        $(a).removeClass("criterisNoVisibles");
        $(a).addClass("criterisVisibles");
      }
    },this);
    _.each($(".navegacioPregunta"), function(a,b,c){
      if(a.id != "navegacio-" + this.currentSection){
        $(a).removeClass("navegacioActiva");
      } else {
        $(a).addClass("navegacioActiva");
      }
    },this);
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    _.each($(".menuPregunta"), function(a,b,c){
      if(a.id != "criteris-" + this.currentSection){
        $(a).removeClass("criterisVisibles");
        $(a).addClass("criterisNoVisibles");
      } else {
        $(a).removeClass("criterisNoVisibles");
        $(a).addClass("criterisVisibles");
      }
    },this);
    _.each($(".navegacioPregunta"), function(a,b,c){
      if(a.id != "navegacio-" + this.currentSection){
        $(a).removeClass("navegacioActiva");
      } else {
        $(a).addClass("navegacioActiva");
      }
    },this);
  }

  scrollTo(section) {
    var pixelsFinsAlDiv = 0;
    _.find($('#parentDiv > div'),function(div){
      pixelsFinsAlDiv += parseInt($(div).css("marginTop").replace('px', ''));
      if(div.id != section){
        pixelsFinsAlDiv += $(div).height();
      } else {
        return true;
      }
    },this);
    var parentId = $('#'+section).parent()[0].id;
    var parent = document.getElementById(parentId);
    var elementMidPositonOffset = pixelsFinsAlDiv - $(parent).height()/2 + $('#'+section).height()/2;
    parent.scrollTo({
      top: elementMidPositonOffset,
      left: 0,
      behavior: 'smooth'
    });
  }

  guardar(){
    alert("Correcció guardada.");
  }
  getUrlExamen()
  {
    return "assets/examen2.jpg";
  }
  onResize(){
    var ampladaOAlcada = 1;
    var imatgeHeight = $("#examen").height();
    //com que encara no esta carregada la imatge i no sap la
    //alcada de tal, agada el ample del div que sera el mateix
    //per a fer la regla de tres
    if(imatgeHeight == 0){
      ampladaOAlcada = 0;
      imatgeHeight = $("#parentDiv").width();
    }
    var reglaDeTres = imatgeHeight / this.tamanyExamen2[ampladaOAlcada];
    _.each($("#parentDiv > div"),function(div,a,b){
      var tamanyActual = this.tamanysCapceleraIPreguntes[a] * reglaDeTres;
      $(div).height(tamanyActual);
    },this);
  }

}