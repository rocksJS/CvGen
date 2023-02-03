import { ICommonDataProperties } from './request.interface';

export interface IEmployee extends ICommonDataProperties {
  blocked?: boolean;
  confirmed?: boolean;
  provider?: string;

  cvs?: any;
  skills?: any;
  languages?: any;

  email: string;
  firstName: string;
  lastName: string;
  username?: string;
  description?: string;
  education?: string;

  id: number;
}
