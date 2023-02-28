import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cc-monitoring-filters',
  templateUrl: './monitoring-filters.component.html',
  styleUrls: ['./monitoring-filters.component.scss']
})
export class MonitoringFiltersComponent {

  filtersForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      idClient: [, Validators.required],
      idProduct: []
    });
  }
}
