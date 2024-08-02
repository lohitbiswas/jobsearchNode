import Event from '@modules/event/schema';
import { IEvent } from '@modules/event/model';

export const getEventById = async (id: string): Promise<IEvent | null> => {
  return await Event.findById(id);
};
