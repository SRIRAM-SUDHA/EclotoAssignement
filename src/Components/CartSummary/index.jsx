import { useEffect } from "react";
import { useCartContext } from "../../Context/useCartContext";
import { ProgressBar } from "./ProgressBar";

const THRESHOLD = 1000;
const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };

export const CartSummary = () => {
  const { state, addToCart, removeFromCart } = useCartContext();
  const { cart } = state;
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  useEffect(() => {
    const isGiftInCart = cart.some((item) => item.id === FREE_GIFT.id);
    if (totalPrice >= THRESHOLD && !isGiftInCart) {
      addToCart(FREE_GIFT); // Add the free gift to the cart
    }
    if (totalPrice < THRESHOLD && isGiftInCart) {
      removeFromCart(FREE_GIFT); // Remove the free gift from the cart
    }
  });

  return (
    <div className="mb-6">
      <h1 className="pb-2 text-lg font-bold">Cart Summary</h1>
      <div className="flex flex-col gap-2 divide-y-1 divide-stone-500 rounded-lg bg-white p-3 shadow-lg shadow-stone-300">
        <div className="flex items-center justify-between pb-2.5">
          <h1 className="text-sm font-medium text-black">Subtotal:</h1>
          <p className="text-base font-bold">&#x20B9;{totalPrice}</p>
        </div>
        {totalPrice >= THRESHOLD ? (
          <h1 className="text-xs font-semibold text-black">
            You got a free Wireless Mouse!
          </h1>
        ) : (
          <ProgressBar totalPrice={totalPrice} />
        )}
      </div>
    </div>
  );
};
