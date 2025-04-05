import { createContext, useReducer } from "react";

const CartContext = createContext();

const intialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const items = state.cart.find((item) => item.id === action.payload.id);
      if (items) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity >= 1),
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const addToCart = (item) => {
    // console.log("Adding to cart", item);
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    // console.log("Removing from cart", item);
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const decrementQuantity = (item) => {
    // console.log("Decreasing quantity", item);
    dispatch({ type: "DECREMENT_QUANTITY", payload: item });
  };
  const incrementQuantity = (item) => {
    // console.log("Increasing quantity", item);
    dispatch({ type: "INCREMENT_QUANTITY", payload: item });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        decrementQuantity,
        incrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
