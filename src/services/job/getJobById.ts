import Job from '@modules/job/schema';

/**
 * Get a job by its ID.
 * @param id - The ID of the job to retrieve.
 * @returns The job document or null if not found.
 */
export const getJobById = async (id: string) => {
  return await Job.findById(id);
};
