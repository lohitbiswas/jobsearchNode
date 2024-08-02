import { celebrate, Joi } from 'celebrate';

export const getTicketByIdValidation = celebrate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
});

