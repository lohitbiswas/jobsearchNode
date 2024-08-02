import mongoose, { Schema } from 'mongoose';
import { ITicket } from '@modules/ticket/model';

const TicketSchema: Schema = new Schema(
  {
    event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    attendee: { type: Schema.Types.ObjectId, ref: 'Attendee', required: true },
    ticketType: { type: String, required: true },
    price: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITicket>('Ticket', TicketSchema);
