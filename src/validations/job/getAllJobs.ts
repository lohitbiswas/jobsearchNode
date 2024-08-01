import { celebrate, Joi } from 'celebrate';

export const getAllJobs = celebrate({
  query: Joi.object({
    page: Joi.number().integer().min(1).optional(),
    limit: Joi.number().integer().min(1).optional(),
  }),
});
