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
  criteris: any;
  tamanyExamen1: number[] = [2480,10547];
  tamanyExamen: number[] = [2480,5976];
  tamanysCapcelera = '509px';
  currentSection = 'pregunta1';
  currentSectionRendered: string;
  scrollBarWidth: number;
  
  nota: number = 0;
  preguntes = [
    {numero_pregunta: 1, valoracio_minima: 0, valoracio_maxima: 1, puntuacioPersonalitzada: false, puntuacioPersonalitzadaValor: 0, puntuacioPersonalitzadaDescripcio: "", tamanyPregunta: 1063, criteris: [
      {valor: 0.1, descripcio: "Criteri 1", checked: false},
      {valor: 0.2, descripcio: "Criteri 2", checked: false},
      {valor: 0.3, descripcio: "Criteri 3", checked: false} 
      ]},
      {numero_pregunta: 2, valoracio_minima: 0, valoracio_maxima: 1, puntuacioPersonalitzada: false, puntuacioPersonalitzadaValor: 0, puntuacioPersonalitzadaDescripcio: "", tamanyPregunta: 590, criteris: [
        {valor: 1, descripcio: "Criteri 1", checked: false} 
      ]},
      {numero_pregunta: 3, valoracio_minima: 0, valoracio_maxima: 2, puntuacioPersonalitzada: false, puntuacioPersonalitzadaValor: 0, puntuacioPersonalitzadaDescripcio: "", tamanyPregunta: 1291, criteris: [
        {valor: 0.1, descripcio: "Criteri 1", checked: false},
        {valor: 0.2, descripcio: "Criteri 2", checked: false},
        {valor: 0.3, descripcio: "Criteri 3", checked: false},
        {valor: 0.4, descripcio: "Criteri 4", checked: false},
        {valor: 0.5, descripcio: "Criteri 5", checked: false},
        {valor: 0.6, descripcio: "Criteri 6", checked: false},
        {valor: 0.7, descripcio: "Criteri 7", checked: false}  
      ]},
      {numero_pregunta: 4, valoracio_minima: 0, valoracio_maxima: 1.5, puntuacioPersonalitzada: false, puntuacioPersonalitzadaValor: 0, puntuacioPersonalitzadaDescripcio: "", tamanyPregunta: 426, criteris: [
        {valor: 1, descripcio: "Criteri 1", checked: false},
        {valor: 0.5, descripcio: "Criteri 2", checked: false} 
      ]},
      {numero_pregunta: 5, valoracio_minima: 0, valoracio_maxima: 3, puntuacioPersonalitzada: false, puntuacioPersonalitzadaValor: 0, puntuacioPersonalitzadaDescripcio: "", tamanyPregunta: 1170, criteris: [
        {valor: 1, descripcio: "Criteri 1", checked: false},
        {valor: 0.2, descripcio: "Criteri 2", checked: false},
        {valor: 0.3, descripcio: "Criteri 3", checked: false},
        {valor: 0.3, descripcio: "Criteri 4", checked: false},
        {valor: 0.1, descripcio: "Criteri 5", checked: false} 
      ]},
      {numero_pregunta: 6, valoracio_minima: 0, valoracio_maxima: 1.5, puntuacioPersonalitzada: false, puntuacioPersonalitzadaValor: 0, puntuacioPersonalitzadaDescripcio: "", tamanyPregunta: 934, criteris: [
        {valor: 1, descripcio: "Criteri 1", checked: false},
        {valor: 0.5, descripcio: "Criteri 2", checked: false},
        {valor: 0.3, descripcio: "Criteri 3", checked: false} 
      ]}

  ];
  getTamanyCapcalera(){
    var tamanyCapcelera = 0;
    var ampladaOAlcada = 1;
    var imatgeHeight = $("#examen").height();
    //com que encara no esta carregada la imatge i no sap la
    //alcada de tal, agada el ample del div que sera el mateix
    //per a fer la regla de tres
    if(imatgeHeight == 0){
      ampladaOAlcada = 0;
      imatgeHeight = $("#parentDiv").width();
    }
    var reglaDeTres = imatgeHeight / this.tamanyExamen[ampladaOAlcada];
    _.each(this.preguntes,function(pregunta){
      tamanyCapcelera += pregunta.tamanyPregunta;
    });
    tamanyCapcelera = (this.tamanyExamen[1] - tamanyCapcelera) * reglaDeTres;
    return tamanyCapcelera + 'px';
  }
  getTamanyPregunta(numPregunta){
    var ampladaOAlcada = 1;
    var imatgeHeight = $("#examen").height();
    //com que encara no esta carregada la imatge i no sap la
    //alcada de tal, agada el ample del div que sera el mateix
    //per a fer la regla de tres
    if(imatgeHeight == 0){
      ampladaOAlcada = 0;
      imatgeHeight = $("#parentDiv").width();
    }
    var reglaDeTres = imatgeHeight / this.tamanyExamen[ampladaOAlcada];
    var tamanyPregunta = (this.preguntes[numPregunta].tamanyPregunta * reglaDeTres);
    return tamanyPregunta + 'px';
  }

  constructor( public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.calcularAmpladaDelScrollbar();
    this.onResize();
    
    setTimeout(function(){
      $("#menuCriteris").css({ 'top': $("#toolbar").outerHeight() + 'px', 'height': 'calc(100% - ' + $("#toolbar").outerHeight() + 'px)' });
    },1);
    setTimeout(()=>{    //<<<---    using ()=> syntax
      this.scrollTo(-1);
     }, 500);
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
    var sectionSplit = this.currentSection.match(/[a-z]+|[^a-z]+/gi);
    this.currentSectionRendered = sectionSplit[0].charAt(0).toUpperCase() + sectionSplit[0].slice(1) + ' ' + sectionSplit[1];

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

  scrollTo(numPregunta) {
    var pixelsFinsAlDiv = 0;
    if(numPregunta == -1){
      pixelsFinsAlDiv = parseInt($('#capcaleraExamen').css("marginTop").replace('px', ''));
    } else {
      _.find($('#parentDiv > div'),function(div){
        pixelsFinsAlDiv += parseInt($(div).css("marginTop").replace('px', ''));
        if(div.id != ('pregunta' + numPregunta)){
          pixelsFinsAlDiv += $(div).height();
        } else {
          return true;
        }
      },this);
    }
    
    var parentId:string;
    if(numPregunta == -1){
      parentId = $('#capcaleraExamen').parent()[0].id;
    } else {
      parentId = $('#pregunta' + numPregunta).parent()[0].id;
    }
    var parent = document.getElementById(parentId);
    var elementMidPositonOffset: number;
    if(numPregunta == -1){
      elementMidPositonOffset = pixelsFinsAlDiv - $(parent).height()/2 + $('#capcaleraExamen').height()/2;
    } else {
      elementMidPositonOffset = pixelsFinsAlDiv - $(parent).height()/2 + $('#pregunta' + numPregunta).height()/2;
    }
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
    //--------------CONTENIDOR DE LA IMATGE DEL EXAMEN-------------
    //amagar el scrollbar
    $("#parentDiv").css('padding-right',this.scrollBarWidth);
    //sense la barra de sota
    // $("#parentDiv").css({ 'height': 'calc(100% - ' + $("#navegacioPreguntes").outerHeight() + 'px)' });
    $("#parentDiv").css({ 'height': '100%' });
    //sense la barra de criteris
    $("#parentDiv").css({ 'width': 'calc(100% - ' + $("#menuCriteris").outerWidth() + 'px)' });
    //barra de navegacio
    $("#navegacioPreguntes").css({ 'width': 'calc(100% - ' + $("#menuCriteris").outerWidth() + 'px)' });
    
    //--------------CONTENIDOR DELS CRITERIS-------------
    // $("#menuCriteris").css({ 'top': $("#toolbar").outerHeight() + 'px)', 'height': 'calc(100vh - ' + ($("#navegacioPreguntes").outerHeight() + $("#toolbar").outerHeight()) + 'px)' });
    $("#menuCriteris").css({ 'top': $("#toolbar").outerHeight() + 'px', 'height': 'calc(100% - ' + $("#toolbar").outerHeight() + 'px)' });


    //--------------DIVS OCULTS DE LES PREGUNTES-------------
    $("#capceleraExamen").height(this.getTamanyCapcalera());
    _.each($(".divOcultPreguntaExamen"),function(div,a,b){
      $(div).height(this.getTamanyPregunta(a));
    },this);
  }

  calcularAmpladaDelScrollbar(){
    // Create the measurement node
    var scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);
    // Get the scrollbar width
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.scrollBarWidth = scrollbarWidth;
    // Delete the DIV 
    document.body.removeChild(scrollDiv);
  }

  getValoracioCriteris(pregunta){
    var valor = 0;
    if(pregunta.puntuacioPersonalitzada){
      valor += pregunta.puntuacioPersonalitzadaValor;
    } else {
      pregunta.criteris.forEach(criteri => {
        if(criteri.checked){
          valor += criteri.valor;
          if(valor > pregunta.valoracio_maxima){
            valor = pregunta.valoracio_maxima;
          }
        }
      });
    }
    return valor != 0 ? parseFloat(valor.toFixed(2)) : 0;
  }
  
  valorDelsCriterisMinim(pregunta){
    var valor = 0;
      pregunta.criteris.forEach(criteri => {
          valor += criteri.valor;
      });
    return valor < pregunta.valoracio_maxima ? false : true;
  }

  getNotaExamen(preguntes){
    var valor = 0;
    preguntes.forEach(pregunta => {
      valor += this.getValoracioCriteris(pregunta);
    });
    this.nota = valor;
    if(this.nota < 5){
      $("#notaExamen").css({'color': 'red'});
    } else{
      $("#notaExamen").css({'color': 'green'});
    }
    return valor != 0 ? parseFloat(valor.toFixed(2)) : 0;
  }


}