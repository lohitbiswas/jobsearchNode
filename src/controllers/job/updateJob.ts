import { Request, Response } from 'express';
import { updateJob as updateJobService } from '../../services/job';

export const updateJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const jobData = req.body;
    const updatedJob = await updateJobService(id, jobData);
    if (updatedJob) {
      res.status(200).json(updatedJob);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'error occured' });
  }
};
