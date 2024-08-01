import { Request, Response } from 'express';
import { createApplication } from '../../services/application';

export const createApplicationController = async (req: Request, res: Response) => {
  try {
    const applicationData = req.body;
    const application = await createApplication(applicationData);
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
