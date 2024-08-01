import { Document, Types } from 'mongoose';

export interface IApplication extends Document {
  job: string;
  applicant: string;
  resume: string;
  coverLetter: string;
  status: string;
}
