import { NgModule } from '@angular/core';
import { MonitoringFiltersComponent } from './monitoring-filters/monitoring-filters.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes = [
  { path: '', component: MonitoringFiltersComponent }
]

@NgModule({
  declarations: [
    MonitoringFiltersComponent
  ],
  imports: [
    ComponentsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MonitoringModule { }
