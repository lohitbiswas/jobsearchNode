import Application from '@modules/application/schema';
import { IApplication } from '@modules/application/model';
export const getAllApplications = async (): Promise<IApplication[]> => {
  return await Application.find();
};
