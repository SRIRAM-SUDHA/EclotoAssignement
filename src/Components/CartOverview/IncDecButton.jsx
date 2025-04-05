import { useCartContext } from "../../Context/useCartContext";

export const IncDecButton = ({ quantity, item }) => {
  const { incrementQuantity, decrementQuantity } = useCartContext();
  return (
    <div className="flex items-center justify-between gap-3 text-xs font-bold">
      <button
        className="h-6 w-6 rounded bg-red-500 text-white"
        onClick={() => decrementQuantity(item)}
      >
        -
      </button>
      <p>{quantity} </p>
      <button
        className="h-6 w-6 rounded bg-green-500 text-white"
        onClick={() => incrementQuantity(item)}
      >
        +
      </button>
    </div>
  );
};
