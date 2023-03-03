import { NgModule } from '@angular/core';
import { MonitoringFiltersComponent } from './monitoring-filters/monitoring-filters.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const routes = [
  { path: '', component: MonitoringFiltersComponent }
]

@NgModule({
  declarations: [
    MonitoringFiltersComponent
  ],
  imports: [
    ComponentsModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MonitoringModule { }
