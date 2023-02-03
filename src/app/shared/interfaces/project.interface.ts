import { ICommonDataProperties } from './request.interface';

export interface IProjectData extends ICommonDataProperties {
  name: string;
  description: string;
  domain: string;
  from: string;
  internalName: string;
  to: string;

  id?: number;
}

export interface IProjectRequest {
  id?: number;
  attributes: IProjectData;
}
