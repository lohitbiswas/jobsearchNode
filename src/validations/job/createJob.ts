import { celebrate, Joi } from 'celebrate';

export const createJob = celebrate({
  body: Joi.object({
    title: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    company: Joi.string().required().trim(),
    location: Joi.string().required().trim(),
    salary: Joi.string().optional().trim(),
    type: Joi.string().valid('Full-time', 'Part-time', 'Contract', 'Internship').optional().trim(),
    employer: Joi.string().optional().trim(),
  }),
});
