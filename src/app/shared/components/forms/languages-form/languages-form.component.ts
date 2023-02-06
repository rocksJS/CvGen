import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cvg-languages-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages-form.component.html',
  styleUrls: ['./languages-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesFormComponent {}
