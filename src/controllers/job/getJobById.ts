import { Request, Response } from 'express';
import { getJobById as getJobByIdService } from '../../services/job';

export const getJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await getJobByIdService(id);
    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'error occured' });
  }
};
