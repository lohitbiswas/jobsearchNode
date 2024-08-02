import Event from '@modules/event/schema';
import { IEvent } from '@modules/event/model';

export const createEvent = async (eventData: IEvent): Promise<IEvent> => {
  const event = new Event(eventData);
  return await event.save();
};
