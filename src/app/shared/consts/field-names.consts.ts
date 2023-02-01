import { IFieldName } from '../interfaces/fieldnames.interface';

export const EMPLOYEES_FIELDNAMES: IFieldName[] = [
  {
    name: 'firstName',
    fieldName: 'First Name',
    width: '25%',
  },
  {
    name: 'lastName',
    fieldName: 'Last Name',
    width: '25%',
  },
  {
    name: 'email',
    fieldName: 'Email',
    width: '25%',
  },
  {
    name: 'languages',
    fieldName: 'Languages',
    width: '10%',
  },
  {
    name: 'skills',
    fieldName: 'Skills',
    width: '25%',
  },
];

export const PROJECTS_FIELDNAMES: IFieldName[] = [
  {
    name: 'name',
    fieldName: 'Name',
  },
  {
    name: 'from',
    fieldName: 'From',
  },
  {
    name: 'to',
    fieldName: 'To',
  },
  {
    name: 'domain',
    fieldName: 'Domain',
  },
  {
    name: 'internalName',
    fieldName: 'Internal Name',
  },
];
