
import { Request, Response } from 'express';
import { createJob as createJobService } from '../../services/job';

export const createJob = async (req: Request, res: Response) => {
  try {
    const jobData = req.body;
    const job = await createJobService(jobData);
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
