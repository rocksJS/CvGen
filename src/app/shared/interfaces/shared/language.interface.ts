import { ICommonDataProperties } from '../request.interface';

export interface ILanguageData extends ICommonDataProperties {
  name: string;
}

export interface ILanguageRequest {
  id?: number;
  attributes: ILanguageData;
}
