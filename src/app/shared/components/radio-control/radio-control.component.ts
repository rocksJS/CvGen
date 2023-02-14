import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { BaseControl } from '../../classes/base-control';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'cvg-radio-control',
  standalone: true,
  imports: [CommonModule, NzRadioModule, FormsModule, ReactiveFormsModule],
  templateUrl: './radio-control.component.html',
  styleUrls: ['./radio-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioControlComponent extends BaseControl {
  selectedGrade: string;

  @Input() public options: string[];

  //['A2', 'A1', 'B2', 'B1', 'C2', 'C1'];
}
