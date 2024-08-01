import mongoose, { Schema } from 'mongoose';
import { IJob } from './model';

const JobSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    skillsRequired: [{ type: String }],
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String },
    type: { type: String,  required: true },
    employer: { type: String,  required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IJob>('Job', JobSchema);
