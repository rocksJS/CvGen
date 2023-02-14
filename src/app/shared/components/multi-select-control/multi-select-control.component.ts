import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BaseControl } from '../../classes/base-control';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzRadioButtonDirective } from 'ng-zorro-antd/radio';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'cvg-multi-select-control',
  standalone: true,
  imports: [CommonModule, FormsModule, NzTreeSelectModule, NzSelectModule, NzRadioModule, ReactiveFormsModule],
  templateUrl: './multi-select-control.component.html',
  styleUrls: ['./multi-select-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MultiSelectControlComponent extends BaseControl {
  selectedLanguage: string;
  selectedLevel: string;
  languages = [{ name: 'English' }, { name: 'French' }, { name: 'German' }];
  grades = ['A2', 'A1', 'B2', 'B1', 'C2', 'C1'];
}
