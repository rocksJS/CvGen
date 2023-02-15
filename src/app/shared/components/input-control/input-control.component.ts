import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BaseControl } from '../../classes/base-control';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'cvg-input-control',
  standalone: true,
  imports: [CommonModule, NzInputModule, ReactiveFormsModule],
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputControlComponent extends BaseControl {
  @Input() public type?: string;

  @Input() public isDisabled: boolean;
}
