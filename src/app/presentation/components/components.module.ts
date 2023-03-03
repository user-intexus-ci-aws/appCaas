import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectClientComponent } from './select/select.client.component';
import { SelectProductComponent } from './select/select.product.component';
import { SelectPrinterComponent } from './select/select.printer.component.ts.component';
import { SelectTransactionStatusComponent } from './select/select.transaction.status.component copy';

@NgModule({
  declarations: [
    SelectClientComponent,
    SelectProductComponent,
    SelectPrinterComponent,
    SelectTransactionStatusComponent
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
    SelectPrinterComponent,
    SelectProductComponent,
    SelectTransactionStatusComponent
  ]
})
export class ComponentsModule { }
