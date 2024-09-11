import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  room?: RoomWhereUniqueInput | null;
};
