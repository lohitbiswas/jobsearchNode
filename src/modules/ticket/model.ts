import { Document, Types } from 'mongoose';

export interface ITicket extends Document {
  event: Types.ObjectId;
  attendee: Types.ObjectId;
  ticketType: string;
  price: number;
  purchaseDate: Date;
}
