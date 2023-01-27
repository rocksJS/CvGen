import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'cvg-translate-button',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './translate-button.component.html',
  styleUrls: ['./translate-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslateButtonComponent {}
