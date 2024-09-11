import { Room } from "../room/Room";

export type Hotel = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  rooms?: Array<Room>;
  updatedAt: Date;
};
