import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientRepository } from '../core/repositories/client.repository';
import { ProductRepository } from '../core/repositories/product.repository';
import { ClientWebRepository } from '../data/repositories/client/client.web.repository';
import { ProductMockRepository } from '../data/repositories/product/product.mock.repository';
import { ComponentsModule } from './components/components.module';
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
    { provide: ClientRepository, useClass: ClientWebRepository },
    { provide: ProductRepository, useClass: ProductMockRepository }
  ]
})
export class PresentationModule { }
