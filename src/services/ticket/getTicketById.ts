import Ticket from '@modules/ticket/schema';
import { ITicket } from '@modules/ticket/model';
export const getTicketById = async (id: string): Promise<ITicket | null> => {
  return await Ticket.findById(id).populate('event').populate('attendee');
};
