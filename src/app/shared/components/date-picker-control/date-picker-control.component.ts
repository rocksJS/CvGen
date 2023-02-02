import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { BaseControl } from '../../classes/base-control';

@Component({
  selector: 'cvg-date-picker-control',
  standalone: true,
  imports: [CommonModule, NzDatePickerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './date-picker-control.component.html',
  styleUrls: ['./date-picker-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerControlComponent extends BaseControl {
  @Input() value: string;

  public changeTouchedState(event: boolean) {
    if (event === false) {
      this.baseControl.markAsTouched();
    }
  }
}
