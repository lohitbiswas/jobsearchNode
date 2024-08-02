import { celebrate, Joi } from 'celebrate';

export const createTicketValidation = celebrate({
  body: Joi.object({
    event: Joi.string().required(),
    attendee: Joi.string().required(),
    ticketType: Joi.string().required(),
    price: Joi.number().required(),
  }),
});