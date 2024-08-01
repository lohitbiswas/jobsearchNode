import { Router } from 'express';
import { createJob, getAllJobs, getJobById, updateJob, deleteJob } from '@controllers/job';
import {
  createJob as validateCreateJob,
  getAllJobs as validateGetAllJobs,
  getJobById as validateGetJobById,
  updateJob as validateUpdateJob,
  deleteJob as validateDeleteJob,
} from '@validations/job';

const jobRouter = Router();

// Create a new job posting
jobRouter.post('/jobs', validateCreateJob, createJob);

// Retrieve all job postings
jobRouter.get('/jobs', validateGetAllJobs, getAllJobs);

// Retrieve a specific job by ID
jobRouter.get('/jobs/:id', validateGetJobById, getJobById);

// Update a job posting by ID
jobRouter.put('/jobs/:id', validateUpdateJob, updateJob);

// Delete a job posting by ID
jobRouter.delete('/jobs/:id', validateDeleteJob, deleteJob);

export {jobRouter} ;
