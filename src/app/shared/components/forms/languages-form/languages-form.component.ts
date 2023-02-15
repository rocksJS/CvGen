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
import { languagesDataSelector } from 'src/app/ngrx/selectors/language.selectors';
import { BaseForm } from 'src/app/shared/classes/base-form';
import { LANGUAGE_GRADE_NAMES } from 'src/app/shared/consts/radio-value-names.consts';
import { ILanguageRequest } from 'src/app/shared/interfaces/shared/language.interface';
import { PlusButtonComponent } from '../../buttons/plus-button/plus-button.component';
import { InputControlComponent } from '../../input-control/input-control.component';
import { MultiSelectControlComponent } from '../../multi-select-control/multi-select-control.component';
import { RadioControlComponent } from '../../radio-control/radio-control.component';
import { SelectControlComponent } from '../../select-control/select-control.component';

@Component({
  selector: 'cvg-languages-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputControlComponent,
    SelectControlComponent,
    FormsModule,
    PlusButtonComponent,
    RadioControlComponent,
  ],
  templateUrl: './languages-form.component.html',
  styleUrls: ['./languages-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: LanguagesFormComponent, multi: true },
    {
      provide: NG_VALIDATORS,
      useExisting: LanguagesFormComponent,
      multi: true,
    },
  ],
})
export class LanguagesFormComponent extends BaseForm {
  public languageLevels = LANGUAGE_GRADE_NAMES;

  public languageNames = this.store
    .select(languagesDataSelector)
    .pipe(map((skills: ILanguageRequest[]) => skills.map((item: ILanguageRequest) => item.attributes.name)));

  formGroup = new FormGroup({
    languages: new FormArray([
      new FormGroup({
        name: new FormControl('', [Validators.required]),
        level: new FormControl('', [Validators.required]),
      }),
    ]),
  });

  constructor(private fb: FormBuilder, private store: Store) {
    super();
  }

  public addFormGroup() {
    const languageFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
    });
    this.getFormArray().push(languageFormGroup);
  }

  public getFormArray() {
    return this.formGroup.get('languages') as FormArray;
  }
}
