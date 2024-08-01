import express from 'express';
import { 
  createApplicationController, 
  getAllApplicationsController, 
  getApplicationByIdController, 
  updateApplicationController, 
  deleteApplicationController 
} from '@controllers/application';
import { 
  createApplicationValidation, 
  updateApplicationValidation 
} from '@validations/application';

const applicationRouter = express.Router();

applicationRouter.post('/create-applications', createApplicationValidation, createApplicationController);
applicationRouter.get('/get-applications', getAllApplicationsController);
applicationRouter.get('/applications/:id', getApplicationByIdController);
applicationRouter.put('/applications/:id', updateApplicationValidation, updateApplicationController);
applicationRouter.delete('/applications/:id', deleteApplicationController);

export { applicationRouter};
