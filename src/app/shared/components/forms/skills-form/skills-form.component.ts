import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/shared/classes/base-form';
import { InputControlComponent } from '../../input-control/input-control.component';
import { MultiSelectControlComponent } from '../../multi-select-control/multi-select-control.component';
import { SelectControlComponent } from '../../select-control/select-control.component';

@Component({
  selector: 'cvg-skills-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputControlComponent, MultiSelectControlComponent, SelectControlComponent],
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsFormComponent extends BaseForm implements OnInit {
  formGroup: FormGroup<any>;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      skills: new FormControl('', [Validators.required]),
    });
  }
}
