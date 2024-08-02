import { celebrate, Joi } from 'celebrate';

export const createAttendeeValidation = celebrate({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  }),
});
