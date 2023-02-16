import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { languagesDataSelector } from 'src/app/ngrx/selectors/language.selectors';
import { projectSelector } from 'src/app/ngrx/selectors/project.selectors';
import { BaseForm } from 'src/app/shared/classes/base-form';
import { LANGUAGE_GRADE_NAMES } from 'src/app/shared/consts/radio-value-names.consts';
import { ILanguageRequest } from 'src/app/shared/interfaces/shared/language.interface';

@Component({
  selector: 'cvg-employee-collapse',
  templateUrl: './employee-collapse.component.html',
  styleUrls: ['./employee-collapse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCollapseComponent extends BaseForm {
  public projects = this.store.select(projectSelector);

  formGroup = new FormGroup({
    projects: new FormArray([
      new FormGroup({
        id: new FormControl('', [Validators.required]),
        from: new FormControl('', [Validators.required]),
        to: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        domain: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        internalName: new FormControl('', [Validators.required]),
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
    return this.formGroup.get('projects') as FormArray;
  }
}
