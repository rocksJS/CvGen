import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cvg-skills-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsFormComponent {}
