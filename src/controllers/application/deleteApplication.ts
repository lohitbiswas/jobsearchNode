import { Request, Response } from 'express';
import { deleteApplication } from '../../services/application';

export const deleteApplicationController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedApplication = await deleteApplication(id);
    if (deletedApplication) {
      res.status(200).json(deletedApplication);
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
