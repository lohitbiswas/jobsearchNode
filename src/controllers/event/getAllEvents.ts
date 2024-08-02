import { Request, Response } from 'express';
import { getAllEvents } from '../../services/event/getAllEvents';

export const getAllEventsController = async (req: Request, res: Response) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
