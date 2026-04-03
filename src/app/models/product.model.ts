export interface Product {
  id: string;
  title: string;
  price: number;
  images: string [];
  description: string;
  category: Category;
}
/**clase base que se encargara de transportar los datos */
export interface Category{
  id: string;
  name: string;
}
