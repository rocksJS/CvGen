import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'cvg-save-cancel-buttons',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  templateUrl: './save-cancel-buttons.component.html',
  styleUrls: ['./save-cancel-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaveCancelButtonsComponent {}
