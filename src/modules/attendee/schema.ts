import mongoose, { Schema } from 'mongoose';
import { IAttendee } from '@modules/attendee/model';

const AttendeeSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAttendee>('Attendee', AttendeeSchema);
