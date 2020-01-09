
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

//nuevos componentes
import { LoginComponent } from './login';
import { HomeComponent } from './home';

//ag-grid
import { AgGridModule } from 'ag-grid-angular';

import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppRoutes } from './app.routing';
import { AlertComponent } from './_components';
import { NovaAssignaturaComponent } from './nova-assignatura/nova-assignatura.component';
import { InfoAssignaturaComponent } from './info-assignatura/info-assignatura.component';
import { ActivitatsComponent } from './activitats/activitats.component';
import { NovaActivitatComponent } from './nova-activitat/nova-activitat.component';
import { LlistatActivitatsAssignaturaComponent } from './llistat-activitats-assignatura/llistat-activitats-assignatura.component';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';
import { LlistatPreguntesActivitatComponent } from './llistat-preguntes-activitat/llistat-preguntes-activitat.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    NovaAssignaturaComponent,
    InfoAssignaturaComponent,
    ActivitatsComponent,
    NovaActivitatComponent,
    LlistatActivitatsAssignaturaComponent,
    ButtonRendererComponent,
    LlistatPreguntesActivitatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    AgGridModule.withComponents([ButtonRendererComponent])
  ],
  providers: [
    {
      
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
      

      
    },{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
