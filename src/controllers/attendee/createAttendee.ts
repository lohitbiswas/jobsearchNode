import { Request, Response } from 'express';
import { createAttendee } from '../../services/attendee/createAttendee';

export const createAttendeeController = async (req: Request, res: Response) => {
  try {
    const attendeeData = req.body;
    const attendee = await createAttendee(attendeeData);
    res.status(201).json(attendee);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
