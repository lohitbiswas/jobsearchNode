import { Request, Response } from 'express';
import { getTicketById } from '../../services/ticket/getTicketById';

export const getTicketByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ticket = await getTicketById(id);
    if (ticket) {
      res.status(200).json(ticket);
    } else {
      res.status(404).json({ message: 'Ticket not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
