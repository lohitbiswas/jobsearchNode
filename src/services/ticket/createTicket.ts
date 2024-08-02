import Ticket from '@modules/ticket/schema';
import { ITicket } from '@modules/ticket/model';

export const createTicket = async (ticketData: ITicket): Promise<ITicket> => {
  const ticket = new Ticket(ticketData);
  return await ticket.save();
};
