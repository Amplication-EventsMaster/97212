import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { OrderCreateNestedManyWithoutRoomsInput } from "./OrderCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  availability?: boolean | null;
  hotel?: HotelWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutRoomsInput;
  price?: number | null;
  roomNumber?: string | null;
  typeField?: string | null;
};
