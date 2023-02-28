import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectClientComponent } from './select/select.client.component';



@NgModule({
  declarations: [
    SelectClientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class ComponentsModule { }
