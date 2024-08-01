import Job from '@modules/job/schema';

import { IJob } from '@modules/job/model';


/**
 * Create a new job posting.
 * @param jobData - The job data to create.
 * @returns The created job document.
 */
export const createJob = async (jobData: IJob) => {
  const job = new Job(jobData);
  return await job.save();
};
