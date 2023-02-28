import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { MonitoringModule } from './presentation/monitoring/monitoring.module';
import { PresentationModule } from './presentation/presentation.module';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },

  { path: 'monitoreo', loadChildren: () => import('./presentation/monitoring/monitoring.module').then(n => n.MonitoringModule) },

  { path: '**', pathMatch: 'full', redirectTo: 'monitoreo' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PresentationModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
