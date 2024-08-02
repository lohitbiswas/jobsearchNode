import { Router } from 'express';
import { createAttendeeController } from '@controllers/attendee/createAttendee';
import { createAttendeeValidation } from '@validations/attendee/createAttendee';

const attendeeRouter = Router();

attendeeRouter.post('/attendees', createAttendeeValidation, createAttendeeController);

export default attendeeRouter;
