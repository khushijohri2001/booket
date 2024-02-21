import { createContext, useContext } from "react";
import { useReducer } from "react";
import { CartReducer, ProductReducer, WishlistReducer } from "../reducers";

const CartContext = createContext({
  cart: [],
  wishlist: [],
  byStock: false,
  priceRange: 2000,
  byRating: 5,
  byNotebook: false,
  byBookmark: false,
  searchQuery: "",
  byPrice: 0,
});

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
  });

  const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, {
    wishlist: [],
  });

  const [productState, productDispatch] = useReducer(ProductReducer, {
    byStock: false,
    priceRange: 2000,
    byRating: 5,
    byNotebook: false,
    byBookmark: false,
    searchQuery: "",
    byPrice: 0,
  });

  return (
    <CartContext.Provider
      value={{
        ...state,
        dispatch,
        productState,
        productDispatch,
        wishlistState,
        wishlistDispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
