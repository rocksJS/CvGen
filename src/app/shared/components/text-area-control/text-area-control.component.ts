import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseControl } from '../../classes/base-control';

@Component({
  selector: 'cvg-text-area-control',
  standalone: true,
  imports: [CommonModule, NzInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './text-area-control.component.html',
  styleUrls: ['./text-area-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaControlComponent extends BaseControl {
  @Input() value: string;
}
