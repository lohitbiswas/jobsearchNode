import { Document, Types } from 'mongoose';

export interface IJob extends Document {
  title: string;
  description: string;
  skillsRequired: string[];
  company: string;
  location: string;
  salary: string;
  type: string;
  employer: string;
}
