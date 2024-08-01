import Job from '@modules/job/schema';

/**
 * Delete a job by its ID.
 * @param id - The ID of the job to delete.
 * @returns The deleted job document or null if not found.
 */
export const deleteJob = async (id: string) => {
  return await Job.findByIdAndDelete(id);
};
