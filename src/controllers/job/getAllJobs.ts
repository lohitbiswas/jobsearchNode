import { Request, Response } from 'express';
import { getAllJobs as getAllJobsService } from '../../services/job';

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await getAllJobsService();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).json({ message: 'error' });
  }
};
