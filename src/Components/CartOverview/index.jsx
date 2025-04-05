import { useCartContext } from "../../Context/useCartContext";
import CartEmpty from "../CartEmpty";
import { CartItems } from "./CartItems";
import { IncDecButton } from "./IncDecButton";

export const CartOverview = () => {
  const { state } = useCartContext();
  const { cart } = state;
  return (
    <div className="">
      <h1 className="pb-2 text-lg font-bold">Cart Items</h1>

      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        cart.map((item) => <CartItems key={item.id} item={item} />)
      )}
    </div>
  );
};
