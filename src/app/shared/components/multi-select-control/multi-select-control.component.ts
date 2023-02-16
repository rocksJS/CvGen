import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { BaseControl } from '../../classes/base-control';

@Component({
  selector: 'cvg-multi-select-control',
  standalone: true,
  imports: [CommonModule, FormsModule, NzTreeSelectModule, NzSelectModule, NzRadioModule, ReactiveFormsModule],
  templateUrl: './multi-select-control.component.html',
  styleUrls: ['./multi-select-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MultiSelectControlComponent extends BaseControl {
  @Input() options: any[];
  listOfSelectedValue: string[] = [];

  isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }
}
