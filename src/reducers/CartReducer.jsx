export const CartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
  
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((check) => check.id !== action.payload.id)
        };
  
      case "INCREMENT": {
        const updatedCart = state.cart.map((check) =>
          check.id === action.payload ? { ...check, qty: check.qty + 1 } : check
        );
        return { ...state, cart: updatedCart };
      }
  
      case "DECREMENT": {
        const updatedCart = state.cart
          .map((check) =>
            check.id === action.payload ? { ...check, qty: check.qty - 1 } : check
          )
          .filter((item) => item.qty !== 0);
        return { ...state, cart: updatedCart };
      }
  
      default:
        return state;
    }
  };
  