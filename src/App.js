import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./components";
import {
  About,
  Cart,
  Contact,
  Home,
  Layout,
  Products,
  SingleProducts,
  Wishlist,
} from "./routes";
import { useEffect } from "react";
import {
  TOTAL_DISCOUNT_PRICE_HANDLER,
  TOTAL_ITEMS_QUANTITY_HANDLER,
  TOTAL_ORIGINAL_PRICE_HANDLER,
  TOTAL_PRICE_HANDLER,
} from "./redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { MEDIA_MATCH_HANDLER } from "./redux/mediaMatchSlice";
import { ALL_PRODUCT_LIST_HANDLER } from "./redux/productSlice";
import data from "./utils/data";
import { useWindowSize } from "./custom-hooks/CustomHook";

const App = () => {
  const { cartList } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [width, height] = useWindowSize()

  useEffect(() => {
    try {
      dispatch(TOTAL_ITEMS_QUANTITY_HANDLER());
      dispatch(TOTAL_ORIGINAL_PRICE_HANDLER());
      dispatch(TOTAL_PRICE_HANDLER());
      dispatch(TOTAL_DISCOUNT_PRICE_HANDLER());
      dispatch(ALL_PRODUCT_LIST_HANDLER(data))
    } catch {
      console.log("error");
    }
  }, [cartList, dispatch]);

  useEffect(() => {
    try{
      if(width <= 480){
      dispatch(MEDIA_MATCH_HANDLER(true));
     } else{
      dispatch(MEDIA_MATCH_HANDLER(false));
     }
    } catch {
      console.log("error");
    }


  })

  return (
    <>
      <Layout />
      <Footer />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <SingleProducts />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default App;
