import { Request, Response } from 'express';
import { createTicket } from '../../services/ticket/createTicket';

export const createTicketController = async (req: Request, res: Response) => {
  try {
    const ticketData = req.body;
    const ticket = await createTicket(ticketData);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};



















// export const createTicketController = async (req: Request, res: Response) => {
//   try {
//     const ticketData = req.body;
//     const ticket = await createTicket(ticketData);
//     res.status(201).json(ticket);
//   } catch (error) {
//     res.status(400).json({ message: error });
//   }
// };
