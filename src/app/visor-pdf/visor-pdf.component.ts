import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivitatsService } from '../_services/activitats.service';
import { Activitat } from '../_models/activitat';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-visor-pdf',
  template: `
    <div>
    <label> {{currentPdf}} </label>
    <span> {{currentPdf}} </span>
    <!-- <input (change)="onFileSelected()" type="file" id="file"> -->
    <!-- <input [(ngModel)]="page" type="text" id="page"> -->
    </div>
    <pdf-viewer 
      *ngIf="currentPdf" 
      [src]="currentPdf"
      [render-text]="true"
      [page]="page"
      [show-all]="true"
      style="display:block;">
    </pdf-viewer>
  `,
  styles: []
})
export class VisorPdfComponent implements OnInit {

  page: number = 1;
  currentPdf: string;

  constructor( public router: Router, public route: ActivatedRoute,  private activitatsService: ActivitatsService) { }

  ngOnInit() {
    var id_activitat = +this.route.snapshot.paramMap.get('id');
    this.activitatsService.getAllByIdAssignatura(id_activitat).pipe(first());


  }

  b64toBlob(b64Data, contentType, sliceSize) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  // onFileSelected(){
  //   let img: any = document.querySelector("#file");
  //   if(typeof (FileReader) !== 'undefined'){
  //     let reader = new FileReader();
  //     reader.onload = (e:any) => {
  //       this.pdfSrc = e.target.result;
  //     }
  //     reader.readAsArrayBuffer(img.files[0]);
  //   }
  // }

}
