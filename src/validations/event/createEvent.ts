import { celebrate, Joi } from 'celebrate';

export const createEventValidation = celebrate({
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    venue: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    ticketTypes: Joi.array().items(
      Joi.object({
        type: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
      })
    ).required(),
  }),
});
