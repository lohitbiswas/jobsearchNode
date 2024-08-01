import { Request, Response } from 'express';
import { deleteJob as deleteJobService } from '../../services/job';

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedJob = await deleteJobService(id);
    if (deletedJob) {
      res.status(200).json(deletedJob);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'error' });
  }
};
