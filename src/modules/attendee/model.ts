import { Document } from 'mongoose';

export interface IAttendee extends Document {
  name: string;
  email: string;
}
