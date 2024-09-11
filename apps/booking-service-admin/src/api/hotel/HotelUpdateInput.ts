import { RoomUpdateManyWithoutHotelsInput } from "./RoomUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  address?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rooms?: RoomUpdateManyWithoutHotelsInput;
};
