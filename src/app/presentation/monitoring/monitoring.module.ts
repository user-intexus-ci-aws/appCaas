import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringRoutingModule } from './monitoring-routing.module';
import { MonitoringFiltersComponent } from './monitoring-filters/monitoring-filters.component';


@NgModule({
  declarations: [
    MonitoringFiltersComponent
  ],
  imports: [
    CommonModule,
    MonitoringRoutingModule
  ]
})
export class MonitoringModule { }
