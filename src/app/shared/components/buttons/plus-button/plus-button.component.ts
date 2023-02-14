import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'cvg-plus-button',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule],
  templateUrl: './plus-button.component.html',
  styleUrls: ['./plus-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlusButtonComponent {
  @Input() isDisabled: boolean;
}
