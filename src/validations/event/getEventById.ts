import { celebrate, Joi } from 'celebrate';

export const getEventByIdValidation = celebrate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
});