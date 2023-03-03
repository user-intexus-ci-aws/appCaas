import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ClientRepository } from '../core/repositories/client.repository';
import { PrinterRepository } from '../core/repositories/printer.repository';
import { ProductRepository } from '../core/repositories/product.repository';
import { TransactionRepository } from '../core/repositories/transaction.repository';
import { ClientMockRepository } from '../data/repositories/client/client.mock.repository';
import { ClientWebRepository } from '../data/repositories/client/client.web.repository';
import { PrinterMockRepository } from '../data/repositories/printer/printer.mock.repository';
import { ProductMockRepository } from '../data/repositories/product/product.mock.repository';
import { TransactionMockRepository } from '../data/repositories/transaction/transaction.mock.repository';
import { MonitoringModule } from './monitoring/monitoring.module';

@NgModule({
  declarations: [ ],
  imports: [
    MonitoringModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    { provide: ClientRepository, useClass: ClientMockRepository },
    { provide: PrinterRepository, useClass: PrinterMockRepository },
    { provide: ProductRepository, useClass: ProductMockRepository },
    { provide: TransactionRepository, useClass: TransactionMockRepository }
  ]
})
export class PresentationModule { }
