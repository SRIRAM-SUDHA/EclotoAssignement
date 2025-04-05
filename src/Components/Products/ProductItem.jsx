import { useCartContext } from "../../Context/useCartContext";

export const ProductItem = ({ item }) => {
  const { name, price } = item;
  const { addToCart } = useCartContext();
  return (
    <div className="grow-1 rounded bg-white p-3 shadow-lg shadow-stone-300 ring-stone-200">
      <h2 className="pb-2 text-sm font-medium text-black">{name}</h2>
      <p className="pb-1 text-sm font-medium"> &#x20B9;{price}</p>
      <button
        className="w-full rounded-sm bg-blue-500 px-1 py-1 text-xs text-white hover:bg-blue-600 active:bg-blue-700"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};
