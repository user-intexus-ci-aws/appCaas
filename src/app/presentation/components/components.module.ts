import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectClientComponent } from './select/select.client.component';
import { SelectProductComponent } from './select/select.product.component';

@NgModule({
  declarations: [
    SelectClientComponent,
    SelectProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SelectClientComponent,
    SelectProductComponent
  ]
})
export class ComponentsModule { }
