import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCancelButtonsComponent } from './save-cancel-buttons.component';

describe('SaveCancelButtonsComponent', () => {
  let component: SaveCancelButtonsComponent;
  let fixture: ComponentFixture<SaveCancelButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveCancelButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaveCancelButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
