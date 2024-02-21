export const ProductReducer = (state, action) => {
    switch (action.type) {
      case "SORT_BY_PRICE":
        return { ...state, sort: action.payload };
  
      case "FILTER_BY_PRICE_RANGE":
        return { ...state, priceRange: action.priceValue };
  
      case "FILTER_BY_STOCK":
        return { ...state, byStock: !state.byStock };
  
      case "FILTER_BY_NOTEBOOK":
        return {
          ...state,
          byNotebook: !state.byNotebook
        };
  
      case "FILTER_BY_BOOKMARK":
        return {
          ...state,
          byBookmark: !state.byBookmark
        };
  
      case "FILTER_BY_RATING":
        return { ...state, byRating: action.payload };
  
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
  
      case "CLEAR_FILTER":
        return {
          byStock: false,
          priceRange: 2000,
          byRating: 5,
          byNotebook: false,
          byBookmark: false,
          searchQuery: ""
        };
  
      default:
        return state;
    }
  };
  