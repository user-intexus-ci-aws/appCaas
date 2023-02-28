import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { MonitoringModule } from './monitoring/monitoring.module';



@NgModule({
  declarations: [ ],
  imports: [
    ComponentsModule,
    MonitoringModule
  ]
})
export class PresentationModule { }
