import { celebrate, Joi } from 'celebrate';

export const getJobById = celebrate({
  params: Joi.object({
    id: Joi.string().required().length(24), // Assuming ObjectId length
  }),
});
