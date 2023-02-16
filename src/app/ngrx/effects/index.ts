import { AuthEffects } from './auth.effects';
import { EmployeeEffects } from './employee.effects';
import { LanguageEffects } from './language.effects';
import { PositionEffects } from './position.effects';
import { ProjectEffects } from './project.effects';
import { ResponsibilityEffects } from './responsibility.effects';
import { SkillEffects } from './skill.effects';

export const effects = [
  EmployeeEffects,
  AuthEffects,
  ProjectEffects,
  PositionEffects,
  SkillEffects,
  LanguageEffects,
  ResponsibilityEffects,
];
