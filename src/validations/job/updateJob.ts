import { celebrate, Joi } from 'celebrate';

export const updateJob = celebrate({
  params: Joi.object({
    id: Joi.string().required().length(24), // Assuming ObjectId length
  }),
  body: Joi.object({
    title: Joi.string().optional().trim(),
    description: Joi.string().optional().trim(),
    company: Joi.string().optional().trim(),
    location: Joi.string().optional().trim(),
    salary: Joi.string().optional().trim(),
    type: Joi.string().valid('Full-time', 'Part-time', 'Contract', 'Internship').optional().trim(),
  }),
});
