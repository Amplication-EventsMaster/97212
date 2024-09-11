import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  room?: RoomWhereUniqueInput | null;
};
