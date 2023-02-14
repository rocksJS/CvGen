import { ICommonDataProperties } from '../request.interface';

export interface ISkillData extends ICommonDataProperties {
  name: string;
}

export interface ISkillRequest {
  id?: number;
  attributes: ISkillData;
}
