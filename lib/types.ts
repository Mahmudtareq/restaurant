// bakery types start here
export type ProductItem = {
  title?: string;
  image?: string;
};

export type MenuProductItems = {
  title?: string;
  image?: string;
  price?: number;
  tagLabel?: string;
  description: string;
};

export type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export type MenuProductsItemsCardProps = {
  product: MenuProductItems;
};

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}
