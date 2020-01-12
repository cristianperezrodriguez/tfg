import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { NovaAssignaturaComponent } from './nova-assignatura/nova-assignatura.component';
import { InfoAssignaturaComponent } from './info-assignatura/info-assignatura.component';
import { NovaActivitatComponent } from './nova-activitat/nova-activitat.component';
import { LlistatActivitatsAssignaturaComponent} from './llistat-activitats-assignatura/llistat-activitats-assignatura.component';
import { LlistatPreguntesActivitatComponent} from './llistat-preguntes-activitat/llistat-preguntes-activitat.component';
import { CorreccioExamenComponent } from './correccio-examen/correccio-examen.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard', canActivate: [AuthGuard],
        pathMatch: 'full'
      },
      {
        path: '', canActivate: [AuthGuard],
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard', canActivate: [AuthGuard],
        loadChildren: 
          () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      { path: 'novaAssignatura', component: NovaAssignaturaComponent },
      { path: 'infoAssignatura/:id', component: InfoAssignaturaComponent },
      { path: 'novaActivitat/:id', component: NovaActivitatComponent },
      { path: 'llistatActivitatsAssignatura/:id', component: LlistatActivitatsAssignaturaComponent },
      { path: 'llistatPreguntesActivitat/:id/:id_activitat', component: LlistatPreguntesActivitatComponent },
      { path: 'corregirActivitat/:id', component: CorreccioExamenComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
 

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];