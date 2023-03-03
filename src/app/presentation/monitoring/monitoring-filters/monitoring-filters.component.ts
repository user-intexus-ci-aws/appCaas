import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionFilters } from 'src/app/core/models/transaction.filters';

@Component({
  selector: 'cc-monitoring-filters',
  templateUrl: './monitoring-filters.component.html',
  styleUrls: ['./monitoring-filters.component.scss']
})
export class MonitoringFiltersComponent {

  filtersForm: FormGroup;
  disabled: boolean = true;

  constructor(private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      idClient: [, Validators.required],
      idProduct: [{ value: null, disabled: this.disabled }],
      idPrinter: [{ value: null, disabled: this.disabled }],
      idStatus: [{ value: null, disabled: this.disabled }],
      clientIdTRX: [{ value: '', disabled: this.disabled }],
      internalIdTRX: [{ value: '', disabled: this.disabled }],
      startTime: [{ value: '', disabled: this.disabled }],
      endTime: [{ value: '', disabled: this.disabled }],
      notification: [{ value: '', disabled: this.disabled }]
    });
  }

  changeClient() {
      this.disabled = this.form.idClient == null;
      Object.keys(this.filtersForm.controls).forEach(key => {
        if (key != "idClient") {
          if (this.disabled) {
            this.filtersForm.get(key)?.disable();
            this.filtersForm.reset();
          }
          else
            this.filtersForm.get(key)?.enable();
          }
      });
  }

  cleanFilters() {
    this.filtersForm.reset();
    this.changeClient();
  }

  search() {
    return this.filtersForm.valid;

  }

  private get form(): TransactionFilters {
    return this.filtersForm.getRawValue() as TransactionFilters;
  }

}
