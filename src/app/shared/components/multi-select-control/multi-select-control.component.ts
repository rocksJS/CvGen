import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cvg-multi-select-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multi-select-control.component.html',
  styleUrls: ['./multi-select-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectControlComponent {}
