import { RoomCreateNestedManyWithoutHotelsInput } from "./RoomCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  address?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rooms?: RoomCreateNestedManyWithoutHotelsInput;
};
