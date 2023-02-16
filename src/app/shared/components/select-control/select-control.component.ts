import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseControl } from '../../classes/base-control';
import { Observable } from 'rxjs';

@Component({
  selector: 'cvg-select-control',
  standalone: true,
  imports: [CommonModule, NzSelectModule, ReactiveFormsModule],
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectControlComponent extends BaseControl {
  @Input() public options: string[];

  public selectedValue?: string;
}
