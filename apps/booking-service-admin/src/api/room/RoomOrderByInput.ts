import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  hotelId?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  roomNumber?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
