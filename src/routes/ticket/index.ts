import { Router } from 'express';
import { createTicketController } from '@controllers/ticket/createTicket';
import { getTicketByIdController } from '@controllers/ticket/getTicketById';
import { createTicketValidation } from '@validations/ticket/createTicket';
import { getTicketByIdValidation } from '@validations/ticket/getTicketById';

const ticketRouter = Router();

ticketRouter.post('/tickets', createTicketValidation, createTicketController);
ticketRouter.get('/tickets/:id', getTicketByIdValidation, getTicketByIdController);

export default ticketRouter;
