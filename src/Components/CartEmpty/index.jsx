const CartEmpty = () => {
  return (
    <div className="rounded-lg bg-white p-4 text-center text-slate-400 shadow-lg shadow-stone-300">
      <h1 className="text-sm font-medium text-slate-600 ">Your Cart is Empty</h1>
      <p className="text-xs font-medium p-2">Add some products to see them here!</p>
    </div>
  );
};

export default CartEmpty;
