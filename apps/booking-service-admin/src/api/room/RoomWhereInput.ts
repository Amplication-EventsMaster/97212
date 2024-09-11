import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  availability?: BooleanNullableFilter;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  roomNumber?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
