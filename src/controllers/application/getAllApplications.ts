import { Request, Response } from 'express';
import { getAllApplications } from '../../services/application';

export const getAllApplicationsController = async (req: Request, res: Response) => {
  try {
    const applications = await getAllApplications();
    res.status(200).json(applications);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
