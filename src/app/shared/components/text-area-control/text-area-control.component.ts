import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cvg-text-area-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-area-control.component.html',
  styleUrls: ['./text-area-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaControlComponent {}
