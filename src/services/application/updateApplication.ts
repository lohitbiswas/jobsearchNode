import Application from '@modules/application/schema';
import { IApplication } from '@modules/application/model';

export const updateApplication = async (id: string, applicationData: IApplication): Promise<IApplication | null> => {
  return await Application.findByIdAndUpdate(id, applicationData, { new: true });
};
