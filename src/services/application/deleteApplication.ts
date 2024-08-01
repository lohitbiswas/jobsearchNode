import Application from '@modules/application/schema';
import { IApplication } from '@modules/application/model';

export const deleteApplication = async (id: string): Promise<IApplication | null> => {
  return await Application.findByIdAndDelete(id);
};
