export interface IProjectData {
  createdAt: string;
  publishedAt: string;
  updatedAt: string;

  name: string;
  description: string;
  domain: string;
  from: string;
  internalName: string;
  to: string;

  id: number;
}

export interface IProjectRequest {
  id: number;
  attributes: IProjectData;
}
