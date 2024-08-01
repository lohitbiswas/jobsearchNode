import Job from '@modules/job/schema';

import { IJob } from '@modules/job/model';

/**
 * Update a job by its ID.
 * @param id - The ID of the job to update.
 * @param jobData - The updated job data.
 * @returns The updated job document or null if not found.
 */
export const updateJob = async (id: string, jobData: Partial<IJob>) => {
  return await Job.findByIdAndUpdate(id, jobData, { new: true });
};
