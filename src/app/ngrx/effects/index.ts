import { AuthEffects } from './auth.effects';
import { EmployeeEffects } from './employee.effects';
import { PositionEffects } from './position.effects';
import { ProjectEffects } from './project.effects';

export const effects = [EmployeeEffects, AuthEffects, ProjectEffects, PositionEffects];
