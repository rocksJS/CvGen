import { IRouteConfig } from '../interfaces/route-config.interface';

export const AUTH_PATH: IRouteConfig = {
  path: 'auth',
  fullPath: '/auth',
};
export const ADD_PATH: IRouteConfig = {
  path: 'add',
  fullPath: '/add',
};

export const EMPLOYEES_PATH: IRouteConfig = {
  path: 'employees',
  fullPath: '/employees',
};

export const EMPLOYEE_ADD_PATH: IRouteConfig = {
  path: 'add',
  fullPath: '/add',
};

export const EMPLOYEE_PROFILE_PATH: IRouteConfig = {
  path: 'profile',
  fullPath: '/profile',
  idPath: 'profile/:employeeId',
};

export const PROJECTS_PATH: IRouteConfig = {
  path: 'projects',
  fullPath: '/projects',
};

export const PROJECT_ADD_PATH: IRouteConfig = {
  path: 'add',
  fullPath: '/add',
};

export const PROJECT_INFO_PATH: IRouteConfig = {
  path: 'info',
  fullPath: '/info',
  idPath: 'info/:projectId',
};

export const DASHBOARD_PATH: IRouteConfig = {
  path: 'dashboard',
  fullPath: '/dashboard',
};
