// Author: T4professor

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button mat-flat-button color="primary" type="button" title="{{title}}" (click)="onClick($event)">{{label}}<i class="material-icons">{{materialIcon}}</i></button>
    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

  params;
  label: string;
  title: string;
  materialIcon: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
    this.materialIcon = this.params.materialIcon || null;
    this.title = this.params.title || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }
}