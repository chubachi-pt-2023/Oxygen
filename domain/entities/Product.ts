export type Product = {
  id: string;
  name: string;
  company: string | null;
  brand: string | null;
  category: string | null;
  country: string | null;
  image_url: string | null;
  price: string | null;
  description: string | null;
  composition: string | null;
  capacity: string | null;
  size: string | null;
  product_status: string | null;
  discontinued_on: Date | null;
};
