import { Product } from "./Product";

export type User = {
  id: string;
  name: string;
  uid: string;
  favorites: Product["id"][];
};
