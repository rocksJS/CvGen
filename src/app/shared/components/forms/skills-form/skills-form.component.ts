import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { skillsDataSelector } from 'src/app/ngrx/selectors/skill.selectors';
import { BaseForm } from 'src/app/shared/classes/base-form';
import { SKILLS_GRADE_NAMES } from 'src/app/shared/consts/radio-value-names.consts';
import { IRequestData } from 'src/app/shared/interfaces/shared/data.interface';
import { ISkillData, ISkillRequest } from 'src/app/shared/interfaces/shared/skill.interface';
import { ExtractNamesPipe } from 'src/app/shared/pipes/extract-name.pipe';
import { SkillsApiService } from 'src/app/shared/services/api/skills.api.service';
import { PlusButtonComponent } from '../../buttons/plus-button/plus-button.component';
import { InputControlComponent } from '../../input-control/input-control.component';
import { MultiSelectControlComponent } from '../../multi-select-control/multi-select-control.component';
import { RadioControlComponent } from '../../radio-control/radio-control.component';
import { SelectControlComponent } from '../../select-control/select-control.component';

@Component({
  selector: 'cvg-skills-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputControlComponent,
    MultiSelectControlComponent,
    SelectControlComponent,
    RadioControlComponent,
    PlusButtonComponent,
    ExtractNamesPipe,
  ],
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: SkillsFormComponent, multi: true },
    {
      provide: NG_VALIDATORS,
      useExisting: SkillsFormComponent,
      multi: true,
    },
  ],
}) // implements OnInit
export class SkillsFormComponent extends BaseForm {
  public skillLevels = SKILLS_GRADE_NAMES;

  public skillNames = this.store.select(skillsDataSelector);

  formGroup = new FormGroup({
    skills: new FormArray([
      new FormGroup({
        skill: new FormControl({}, [Validators.required]),
        level: new FormControl('', [Validators.required]),
      }),
    ]),
  });

  constructor(private fb: FormBuilder, private skillsApiService: SkillsApiService, private store: Store) {
    super();
  }

  public addFormGroup() {
    const skillFormGroup = new FormGroup({
      skill: new FormControl({}, [Validators.required]),
      level: new FormControl('', [Validators.required]),
    });

    this.getFormArray().push(skillFormGroup);
  }

  public getFormArray() {
    return this.formGroup.get('skills') as FormArray;
  }
}
