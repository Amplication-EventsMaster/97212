import { Hotel } from "../hotel/Hotel";
import { Order } from "../order/Order";

export type Room = {
  availability: boolean | null;
  createdAt: Date;
  hotel?: Hotel | null;
  id: string;
  orders?: Array<Order>;
  price: number | null;
  roomNumber: string | null;
  typeField: string | null;
  updatedAt: Date;
};
