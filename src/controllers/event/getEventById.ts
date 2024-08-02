import { Request, Response } from 'express';
import { getEventById } from '../../services/event/getEventById';

export const getEventByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await getEventById(id);
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
