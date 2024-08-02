import { Request, Response } from 'express';
import { createEvent } from '../../services/event/createEvent';

export const createEventController = async (req: Request, res: Response) => {
  try {
    const eventData = req.body;
    const event = await createEvent(eventData);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
