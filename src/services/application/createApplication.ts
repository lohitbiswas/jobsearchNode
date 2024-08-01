import Application from '@modules/application/schema';
import { IApplication } from '@modules/application/model';

export const createApplication = async (applicationData: IApplication): Promise<IApplication> => {
  const application = new Application(applicationData);
  return await application.save();
};
