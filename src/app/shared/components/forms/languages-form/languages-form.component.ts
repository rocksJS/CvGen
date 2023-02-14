import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/shared/classes/base-form';
import { InputControlComponent } from '../../input-control/input-control.component';
import { MultiSelectControlComponent } from '../../multi-select-control/multi-select-control.component';

@Component({
  selector: 'cvg-languages-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputControlComponent, MultiSelectControlComponent, FormsModule],
  templateUrl: './languages-form.component.html',
  styleUrls: ['./languages-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesFormComponent extends BaseForm implements OnInit {
  formGroup: FormGroup<any>;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      languages: new FormControl('', [Validators.required]),
    });
  }
}
