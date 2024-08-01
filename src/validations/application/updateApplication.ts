import { celebrate, Joi } from 'celebrate';

export const updateApplicationValidation = celebrate({
  body: Joi.object({
    resume: Joi.string().optional().trim(),
    coverLetter: Joi.string().optional().trim(),
    status: Joi.string().valid('Pending', 'Reviewed', 'Interviewed', 'Offered', 'Rejected').optional(),
  }),
});
