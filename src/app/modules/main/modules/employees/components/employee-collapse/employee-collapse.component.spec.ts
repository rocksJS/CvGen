import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCollapseComponent } from './employee-collapse.component';

describe('EmployeeCollapseComponent', () => {
  let component: EmployeeCollapseComponent;
  let fixture: ComponentFixture<EmployeeCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeCollapseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
