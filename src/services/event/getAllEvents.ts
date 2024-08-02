import Event from '@modules/event/schema';
import { IEvent } from '@modules/event/model';
export const getAllEvents = async (): Promise<IEvent[]> => {
  return await Event.find();
};
