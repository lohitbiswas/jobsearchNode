import Attendee from '@modules/attendee/schema';
import { IAttendee } from '@modules/attendee/model';

export const createAttendee = async (attendeeData: IAttendee): Promise<IAttendee> => {
  const attendee = new Attendee(attendeeData);
  return await attendee.save();
};
