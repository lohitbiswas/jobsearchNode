import { Document, Types } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  venue: string;
  date: Date;
  time: string;
  ticketTypes: Array<{
    type: string;
    price: number;
    quantity: number;
  }>;
}
