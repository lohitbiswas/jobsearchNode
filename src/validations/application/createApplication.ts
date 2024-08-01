import { celebrate, Joi } from 'celebrate';

export const createApplicationValidation = celebrate({
  body: Joi.object({
    job: Joi.string().required(), // Assuming job ID is a string
    applicant: Joi.string().required(), // Assuming applicant ID is a string
    resume: Joi.string().required().trim(),
    coverLetter: Joi.string().optional().trim(),
    status: Joi.string().valid('Pending', 'Reviewed', 'Interviewed', 'Offered', 'Rejected').default('Pending'),
  }),
});
