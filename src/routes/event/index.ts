import { Router } from 'express';
import { createEventController } from '@controllers/event/createEvent';
import { getAllEventsController } from '@controllers/event/getAllEvents';
import { getEventByIdController } from '@controllers/event/getEventById';
import { createEventValidation } from '@validations/event/createEvent';
import { getEventByIdValidation } from '@validations/event/getEventById';

const eventRouter = Router();

eventRouter.post('/events', createEventValidation, createEventController);
eventRouter.get('/events', getAllEventsController);
eventRouter.get('/events/:id', getEventByIdValidation, getEventByIdController);

export default eventRouter;
