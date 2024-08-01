import { Request, Response } from 'express';
import { getApplicationById } from '../../services/application';

export const getApplicationByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const application = await getApplicationById(id);
    if (application) {
      res.status(200).json(application);
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  
};
