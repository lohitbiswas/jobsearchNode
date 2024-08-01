
import { Request, Response } from 'express';
import { updateApplication } from '../../services/application';

export const updateApplicationController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const applicationData = req.body;
    const updatedApplication = await updateApplication(id, applicationData);
    if (updatedApplication) {
      res.status(200).json(updatedApplication);
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
