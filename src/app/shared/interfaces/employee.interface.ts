export interface IEmployee {
  blocked?: boolean;
  confirmed?: boolean;
  provider?: string;

  createdAt: string;
  updatedAt: string;

  cvs?: any;
  skills?: any;
  languages?: any;

  email: string;
  firstName: string;
  lastName: string;
  username: string;
  description?: string;
  education?: string;

  id: number;
}
