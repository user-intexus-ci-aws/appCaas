import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringFiltersComponent } from './monitoring-filters.component';

describe('MonitoringFiltersComponent', () => {
  let component: MonitoringFiltersComponent;
  let fixture: ComponentFixture<MonitoringFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
