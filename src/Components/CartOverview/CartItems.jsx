import { IncDecButton } from "./IncDecButton";

export const CartItems = ({ item }) => {
  const { name, price, quantity } = item;
  return (
    <div className="mb-2 flex items-center justify-between rounded-lg bg-white p-3 shadow-lg shadow-stone-300">
      <div>
        <h1 className="text-sm font-semibold text-black">{name}</h1>
        <p className="text-xs font-medium">
          &#x20B9;{price} x {quantity} = &#x20B9;{price * quantity}{" "}
        </p>
      </div>
      {item.id === 99 ? (
        <p className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-700">FREE GIFT</p>
      ) : (
        <IncDecButton quantity={quantity} item={item} />
      )}
    </div>
  );
};
