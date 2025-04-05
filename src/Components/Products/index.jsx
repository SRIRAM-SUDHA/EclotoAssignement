import { ProductItem } from "./ProductItem";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
];

export const Product = () => {
  return (
    <div className="mb-6">
      <h1 className="font-bold text-lg pb-2">Products</h1>
      <div className="flex justify-between gap-2">
        {/* product list */}
        {PRODUCTS.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};
