import { CartOverview } from "./Components/CartOverview";
import { CartSummary } from "./Components/CartSummary";
import { Product } from "./Components/Products";
import { CartProvider } from "./Context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div className="container min-h-screen min-w-screen bg-stone-100 p-8 pt-4 pr-12 text-slate-700">
        <h1 className="mb-6 text-center text-2xl font-bold text-shadow-lg">
          Shopping Cart
        </h1>
        <Product />
        <CartSummary />
        <CartOverview />
      </div>
    </CartProvider>
  );
};

export default App;
