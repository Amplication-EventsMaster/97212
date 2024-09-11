import { Customer } from "../customer/Customer";
import { Payment } from "../payment/Payment";
import { Room } from "../room/Room";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  orderDate: Date | null;
  payments?: Array<Payment>;
  room?: Room | null;
  updatedAt: Date;
};
