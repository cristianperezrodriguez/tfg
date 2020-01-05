import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { NovaAssignaturaComponent } from './nova-assignatura/nova-assignatura.component';
import { InfoAssignaturaComponent } from './info-assignatura/info-assignatura.component';
import { NovaActivitatComponent } from './nova-activitat/nova-activitat.component';
/*
export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];*/

export const AppRoutes: Routes = [
  /*{ path: '', component: HomeComponent, canActivate: [AuthGuard] },*/
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
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      { path: 'novaAssignatura', component: NovaAssignaturaComponent },
      { path: 'infoAssignatura/:id', component: InfoAssignaturaComponent },
      { path: 'novaActivitat/:id', component: NovaActivitatComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
 

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

//export const appRoutingModule = RouterModule.forRoot(AppRoutes);