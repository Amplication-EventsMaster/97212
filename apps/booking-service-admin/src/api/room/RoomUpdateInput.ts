import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { OrderUpdateManyWithoutRoomsInput } from "./OrderUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  availability?: boolean | null;
  hotel?: HotelWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutRoomsInput;
  price?: number | null;
  roomNumber?: string | null;
  typeField?: string | null;
};
