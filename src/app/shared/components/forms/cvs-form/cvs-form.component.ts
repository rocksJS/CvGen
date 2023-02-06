import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cvg-cvs-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cvs-form.component.html',
  styleUrls: ['./cvs-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvsFormComponent {}
