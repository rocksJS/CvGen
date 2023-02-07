import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/shared/classes/base-form';
import { InputControlComponent } from '../../input-control/input-control.component';

@Component({
  selector: 'cvg-general-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputControlComponent],
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralFormComponent extends BaseForm implements OnInit {
  formGroup: FormGroup<any>;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
}
