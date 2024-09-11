import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  payments?: PaymentListRelationFilter;
  room?: RoomWhereUniqueInput;
};
