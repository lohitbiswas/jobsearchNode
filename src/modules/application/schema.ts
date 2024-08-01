import mongoose, { Schema } from 'mongoose';
import { IApplication } from './model';

const ApplicationSchema: Schema = new Schema(
  {
    job:  { type: String, required: true },
    applicant:  { type: String, required: true },
    resume: { type: String, required: true },
    coverLetter: { type: String },
    status: { type: String,  default: 'Pending' },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IApplication>('Application', ApplicationSchema);
