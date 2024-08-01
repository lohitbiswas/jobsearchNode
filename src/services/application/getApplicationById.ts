import Application from '@modules/application/schema';
import { IApplication } from '@modules/application/model';

export const getApplicationById = async (id: string) => {
  return await Application.findById(id);
};
