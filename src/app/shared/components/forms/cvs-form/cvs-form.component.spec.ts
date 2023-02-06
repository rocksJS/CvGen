import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvsFormComponent } from './cvs-form.component';

describe('CvsFormComponent', () => {
  let component: CvsFormComponent;
  let fixture: ComponentFixture<CvsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
