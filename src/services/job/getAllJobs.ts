import Job from '@modules/job/schema';

/**
 * Get all job postings.
 * @returns A list of job documents.
 */
export const getAllJobs = async () => {
  return await Job.find();
};
